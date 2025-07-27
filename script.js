/**
 * English Learning Website - Refactored Clean Code
 * Modern, modular, and maintainable architecture
 */

// ==================== CONFIGURATION & CONSTANTS ====================
const CONFIG = {
  LANGUAGES: ['vi', 'en'],
  DEFAULT_LANGUAGE: 'vi',
  TEST_DURATION: 30 * 60, // 30 minutes in seconds
  TOTAL_TEST_QUESTIONS: 12,
  STORAGE_KEYS: {
    PROGRESS: 'englishLearnerProgress',
    LANGUAGE: 'preferredLanguage'
  }
};

const SKILL_COLORS = {
  listening: '#3b82f6',
  speaking: '#10b981',
  reading: '#f59e0b',
  writing: '#8b5cf6'
};

// ==================== STATE MANAGEMENT ====================
class AppState {
  constructor() {
    this.currentLanguage = CONFIG.DEFAULT_LANGUAGE;
    this.testState = {
      currentQuestion: 0,
      answers: {},
      timer: null,
      questions: []
    };
    this.init();
  }

  init() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem(CONFIG.STORAGE_KEYS.LANGUAGE);
    if (savedLanguage && CONFIG.LANGUAGES.includes(savedLanguage)) {
      this.currentLanguage = savedLanguage;
    }
  }

  setLanguage(language) {
    this.currentLanguage = language;
    localStorage.setItem(CONFIG.STORAGE_KEYS.LANGUAGE, language);
  }

  getLanguage() {
    return this.currentLanguage;
  }

  resetTest() {
    this.testState = {
      currentQuestion: 0,
      answers: {},
      timer: null,
      questions: []
    };
  }

  getTestState() {
    return this.testState;
  }

  updateTestState(updates) {
    this.testState = { ...this.testState, ...updates };
  }
}

// ==================== TRANSLATIONS ====================
const translations = {
  vi: {
    nav: {
      home: 'Trang chủ',
      skills: 'Kỹ năng',
      test: 'Kiểm tra',
      progress: 'Tiến độ'
    },
    hero: {
      title: 'Học Tiếng Anh Hiệu Quả',
      subtitle: 'Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết với phương pháp học tập hiện đại',
      startButton: 'Bắt đầu học',
      testButton: 'Kiểm tra trình độ'
    },
    skills: {
      title: '4 Kỹ Năng Tiếng Anh',
      listening: {
        title: 'Listening (Nghe)',
        description: 'Rèn luyện khả năng nghe hiểu qua các bài tập đa dạng'
      },
      speaking: {
        title: 'Speaking (Nói)',
        description: 'Phát triển kỹ năng giao tiếp và phát âm chuẩn'
      },
      reading: {
        title: 'Reading (Đọc)',
        description: 'Nâng cao khả năng đọc hiểu và từ vựng'
      },
      writing: {
        title: 'Writing (Viết)',
        description: 'Hoàn thiện kỹ năng viết từ cơ bản đến nâng cao'
      },
      levels: {
        beginner: 'Cơ bản',
        intermediate: 'Trung cấp',
        advanced: 'Nâng cao'
      }
    },
    test: {
      title: 'Kiểm tra trình độ tiếng Anh',
      intro: 'Bài kiểm tra đánh giá trình độ',
      description: 'Bài kiểm tra gồm 12 câu hỏi về 4 kỹ năng (3 câu/kỹ năng)',
      time: 'Thời gian: 30 phút',
      start: 'Bắt đầu kiểm tra',
      previous: 'Câu trước',
      next: 'Câu tiếp',
      finish: 'Hoàn thành',
      result: 'Kết quả',
      level: 'Trình độ',
      score: 'Điểm số',
      details: 'Chi tiết kết quả',
      startLearning: 'Bắt đầu học'
    },
    lesson: {
      lessons: 'Bài học',
      exercises: 'Bài tập',
      submit: 'Nộp bài',
      result: 'Kết quả',
      excellent: 'Xuất sắc! Bạn đã nắm vững kiến thức.',
      good: 'Tốt! Bạn cần ôn luyện thêm một chút.',
      needPractice: 'Cần luyện tập thêm để cải thiện.'
    },
    progress: {
      title: 'Tiến Độ Học Tập',
      completed: 'hoàn thành'
    }
  },
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      test: 'Test',
      progress: 'Progress'
    },
    hero: {
      title: 'Learn English Effectively',
      subtitle: 'Develop all 4 skills - Listening, Speaking, Reading, Writing with modern learning methods',
      startButton: 'Start Learning',
      testButton: 'Take Level Test'
    },
    skills: {
      title: '4 English Skills',
      listening: {
        title: 'Listening',
        description: 'Improve listening comprehension through diverse exercises'
      },
      speaking: {
        title: 'Speaking',
        description: 'Develop communication skills and proper pronunciation'
      },
      reading: {
        title: 'Reading',
        description: 'Enhance reading comprehension and vocabulary'
      },
      writing: {
        title: 'Writing',
        description: 'Perfect writing skills from basic to advanced'
      },
      levels: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced'
      }
    },
    test: {
      title: 'English Level Test',
      intro: 'Level Assessment Test',
      description: 'Test includes 12 questions about 4 skills (3 questions per skill)',
      time: 'Time: 30 minutes',
      start: 'Start Test',
      previous: 'Previous',
      next: 'Next',
      finish: 'Finish',
      result: 'Result',
      level: 'Level',
      score: 'Score',
      details: 'Detailed Results',
      startLearning: 'Start Learning'
    },
    lesson: {
      lessons: 'Lessons',
      exercises: 'Exercises',
      submit: 'Submit',
      result: 'Result',
      excellent: 'Excellent! You have mastered the knowledge.',
      good: 'Good! You need a little more practice.',
      needPractice: 'Need more practice to improve.'
    },
    progress: {
      title: 'Learning Progress',
      completed: 'completed'
    }
  }
};

// ==================== UTILITY FUNCTIONS ====================
class Utils {
  static getCurrentTranslation() {
    return translations[appState.getLanguage()];
  }

  static getLevelName(level) {
    const t = this.getCurrentTranslation();
    return t.skills.levels[level] || level;
  }

  static getSkillName(skill) {
    const t = this.getCurrentTranslation();
    return t.skills[skill]?.title || skill;
  }

  static getSkillColor(skill) {
    return SKILL_COLORS[skill] || '#6b7280';
  }

  static formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  static shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  static calculatePercentage(score, total) {
    return Math.round((score / total) * 100);
  }

  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// ==================== LANGUAGE MANAGEMENT ====================
class LanguageManager {
  static init() {
    this.createLanguageSwitcher();
    this.updatePageLanguage();
  }

  static switchLanguage() {
    const newLanguage = appState.getLanguage() === 'vi' ? 'en' : 'vi';
    appState.setLanguage(newLanguage);
    this.updatePageLanguage();
  }

  static updatePageLanguage() {
    const t = Utils.getCurrentTranslation();

    this.updateNavigation(t);
    this.updateHeroSection(t);
    this.updateSkillsSection(t);
    this.updateProgressSection(t);
    this.updateLanguageButton();
  }

  static updateNavigation(t) {
    const navLinks = document.querySelectorAll('.nav-link');
    const navTexts = [t.nav.home, t.nav.skills, t.nav.test, t.nav.progress];
    navLinks.forEach((link, index) => {
      if (navTexts[index]) link.textContent = navTexts[index];
    });
  }

  static updateHeroSection(t) {
    const selectors = {
      title: '.hero-content h1',
      subtitle: '.hero-content p',
      startBtn: '#start-learning-btn',
      testBtn: '#take-test-btn'
    };

    const elements = {};
    Object.entries(selectors).forEach(([key, selector]) => {
      elements[key] = document.querySelector(selector);
    });

    if (elements.title) elements.title.textContent = t.hero.title;
    if (elements.subtitle) elements.subtitle.textContent = t.hero.subtitle;

    if (elements.startBtn) {
      const icon = elements.startBtn.querySelector('i');
      const iconClass = icon ? icon.className : 'fas fa-play';
      elements.startBtn.innerHTML = `<i class="${iconClass}"></i> ${t.hero.startButton}`;
    }

    if (elements.testBtn) {
      const icon = elements.testBtn.querySelector('i');
      const iconClass = icon ? icon.className : 'fas fa-clipboard-check';
      elements.testBtn.innerHTML = `<i class="${iconClass}"></i> ${t.hero.testButton}`;
    }
  }

  static updateSkillsSection(t) {
    const skillsTitle = document.querySelector('.skills-section .section-title');
    if (skillsTitle) skillsTitle.textContent = t.skills.title;

    const skills = ['listening', 'speaking', 'reading', 'writing'];
    skills.forEach(skill => {
      const skillCard = document.querySelector(`[data-skill="${skill}"]`);
      if (skillCard) {
        const title = skillCard.querySelector('h3');
        const description = skillCard.querySelector('p');

        if (title) title.textContent = t.skills[skill].title;
        if (description) description.textContent = t.skills[skill].description;

        // Update level buttons
        const levelBtns = skillCard.querySelectorAll('.level-btn');
        levelBtns.forEach(btn => {
          const level = btn.dataset.level;
          if (level && t.skills.levels[level]) {
            btn.textContent = t.skills.levels[level];
          }
        });
      }
    });
  }

  static updateProgressSection(t) {
    const progressTitle = document.querySelector('.progress-section .section-title');
    if (progressTitle) progressTitle.textContent = t.progress.title;

    const progressSpans = document.querySelectorAll('.progress-card span');
    progressSpans.forEach(span => {
      const text = span.textContent;
      const match = text.match(/(\d+)%/);
      if (match) {
        span.textContent = `${match[1]}% ${t.progress.completed}`;
      }
    });
  }

  static updateLanguageButton() {
    const langBtn = document.querySelector('.language-btn span');
    if (langBtn) {
      langBtn.textContent = appState.getLanguage() === 'vi' ? 'EN' : 'VI';
    }
  }

  static createLanguageSwitcher() {
    const header = document.querySelector('header .container');
    if (header && !document.querySelector('.language-btn')) {
      const langSwitcher = document.createElement('button');
      langSwitcher.className = 'language-btn';
      langSwitcher.innerHTML = `
        <i class="fas fa-globe"></i>
        <span>${appState.getLanguage() === 'vi' ? 'EN' : 'VI'}</span>
      `;
      langSwitcher.addEventListener('click', () => this.switchLanguage());
      header.appendChild(langSwitcher);
    }
  }
}

// ==================== MODAL MANAGEMENT ====================
class ModalManager {
  static createModal(title) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>${title}</h2>
          <button class="close-btn" onclick="ModalManager.closeModal()">&times;</button>
        </div>
      </div>
    `;

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });

    return modal;
  }

  static closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
      modal.remove();
    }

    // Clean up test state
    if (appState.getTestState().timer) {
      clearInterval(appState.getTestState().timer);
      appState.resetTest();
    }
  }

  static showModal(modal) {
    document.body.appendChild(modal);
    modal.style.display = 'flex';

    // Focus management for accessibility
    const firstFocusable = modal.querySelector('button, input, textarea');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }
}

// ==================== NAVIGATION MANAGEMENT ====================
class NavigationManager {
  static init() {
    this.bindEvents();
  }

  static bindEvents() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Hero section buttons
    const startBtn = document.getElementById('start-learning-btn');
    const testBtn = document.getElementById('take-test-btn');

    if (startBtn) {
      startBtn.addEventListener('click', this.scrollToSkills);
    }

    if (testBtn) {
      testBtn.addEventListener('click', () => {
        // Redirect to the new exam page
        window.location.href = 'exam.html';
      });
    }
  }

  static scrollToSkills() {
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ==================== LESSON MANAGEMENT ====================
class LessonManager {
  static init() {
    this.bindSkillCardEvents();
  }

  static bindSkillCardEvents() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      const levelBtns = card.querySelectorAll('.level-btn');
      levelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const skill = card.dataset.skill;
          const level = btn.dataset.level;
          this.showLessonModal(skill, level);
        });
      });
    });
  }

  static showLessonModal(skill, level) {
    const t = Utils.getCurrentTranslation();
    const title = `${Utils.getSkillName(skill)} - ${Utils.getLevelName(level)}`;
    const modal = ModalManager.createModal(title);

    const skillData = this.getLessonData(skill, level);
    const content = this.createLessonContent(skillData, skill, level, t);

    modal.querySelector('.modal-content').innerHTML += content;
    this.bindLessonEvents(modal, skill, level);
    ModalManager.showModal(modal);
  }

  static createLessonContent(skillData, skill, level, t) {
    return `
      <div class="lesson-nav">
        <button class="lesson-tab active" data-tab="lessons">${t.lesson.lessons}</button>
        <button class="lesson-tab" data-tab="exercises">${t.lesson.exercises}</button>
      </div>
      
      <div id="lessons-section" class="lesson-section active">
        <div class="lessons-list">
          ${skillData.lessons.map((lesson, index) => `
            <div class="lesson-item">
              <h4>${lesson.title}</h4>
              <div>${lesson.content}</div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div id="exercises-section" class="lesson-section">
        <div class="exercises-list">
          ${skillData.exercises.map((exercise, index) => `
            <div class="exercise-item">
              <h4>${t.lesson.exercises} ${index + 1}</h4>
              <p>${exercise.question}</p>
              <div class="answer-options">
                ${exercise.options.map((option, optIndex) => `
                  <div class="answer-option" data-question="${index}" data-answer="${optIndex}">
                    ${String.fromCharCode(65 + optIndex)}. ${option}
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
          <button class="submit-btn" data-skill="${skill}" data-level="${level}">
            <i class="fas fa-check"></i> ${t.lesson.submit}
          </button>
        </div>
      </div>
    `;
  }

  static bindLessonEvents(modal, skill, level) {
    // Tab switching
    const tabs = modal.querySelectorAll('.lesson-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const sections = modal.querySelectorAll('.lesson-section');
        sections.forEach(s => s.classList.remove('active'));

        const targetSection = modal.querySelector(`#${tab.dataset.tab}-section`);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });

    // Answer selection
    const answerOptions = modal.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
      option.addEventListener('click', () => {
        const questionIndex = option.dataset.question;
        const sameQuestion = modal.querySelectorAll(`[data-question="${questionIndex}"]`);
        sameQuestion.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
      });
    });

    // Submit button
    const submitBtn = modal.querySelector('.submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.submitExercises(modal, skill, level);
      });
    }
  }

  static submitExercises(modal, skill, level) {
    const t = Utils.getCurrentTranslation();
    const selectedAnswers = modal.querySelectorAll('.answer-option.selected');
    const skillData = this.getLessonData(skill, level);

    let score = 0;
    const totalQuestions = skillData.exercises.length;

    selectedAnswers.forEach(answer => {
      const questionIndex = parseInt(answer.dataset.question);
      const answerIndex = parseInt(answer.dataset.answer);
      const correctAnswer = skillData.exercises[questionIndex].correct;

      if (answerIndex === correctAnswer) {
        score++;
      }
    });

    const percentage = Utils.calculatePercentage(score, totalQuestions);

    let resultMessage;
    if (percentage >= 80) {
      resultMessage = t.lesson.excellent;
    } else if (percentage >= 60) {
      resultMessage = t.lesson.good;
    } else {
      resultMessage = t.lesson.needPractice;
    }

    const fullMessage = `${t.lesson.result}: ${score}/${totalQuestions} (${percentage}%)\n\n${resultMessage}`;
    alert(fullMessage);

    // Update progress
    ProgressManager.updateProgress(skill, level, percentage);
    ModalManager.closeModal();
  }

  static getLessonData(skill, level) {
    // This would normally come from a data file or API
    // For now, returning sample data structure
    return {
      lessons: [
        {
          title: `${skill} - ${level} Lesson 1`,
          content: `<p>Sample lesson content for ${skill} at ${level} level.</p>`
        }
      ],
      exercises: [
        {
          question: `Sample ${skill} question for ${level} level`,
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correct: 1
        }
      ]
    };
  }
}

// ==================== TEST MANAGEMENT ====================
class TestManager {
  static showTestModal() {
    const t = Utils.getCurrentTranslation();
    const modal = ModalManager.createModal(t.test.title);

    const content = `
      <div class="test-intro">
        <h3>${t.test.intro}</h3>
        <p>${t.test.description}</p>
        <p>${t.test.time}</p>
        <button class="btn btn-primary" onclick="TestManager.startTest()">
          <i class="fas fa-play"></i> ${t.test.start}
        </button>
      </div>
      
      <div id="test-content" style="display: none;">
        <div id="test-progress">
          <div class="progress-info">
            <span>Câu <span id="current-question">1</span>/${CONFIG.TOTAL_TEST_QUESTIONS}</span>
            <span id="timer">${Utils.formatTime(CONFIG.TEST_DURATION)}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" id="test-progress-fill"></div>
          </div>
        </div>
        
        <div id="test-questions"></div>
        
        <div class="test-navigation">
          <button class="btn btn-secondary" onclick="TestManager.previousQuestion()" id="prev-btn" disabled>
            <i class="fas fa-arrow-left"></i> ${t.test.previous}
          </button>
          <button class="btn btn-primary" onclick="TestManager.nextQuestion()" id="next-btn">
            ${t.test.next} <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    modal.querySelector('.modal-content').innerHTML += content;
    ModalManager.showModal(modal);
  }

  static startTest() {
    appState.resetTest();

    // Prepare test questions (using sample grammar questions)
    const testQuestions = this.prepareTestQuestions();
    appState.updateTestState({ questions: testQuestions });

    document.querySelector('.test-intro').style.display = 'none';
    document.getElementById('test-content').style.display = 'block';

    this.showTestQuestion(0);
    this.startTimer();
  }

  static prepareTestQuestions() {
    // Use the grammar questions from the existing data
    if (typeof grammarQuestions !== 'undefined' && grammarQuestions.length > 0) {
      return Utils.shuffleArray(grammarQuestions).slice(0, CONFIG.TOTAL_TEST_QUESTIONS);
    }

    // Fallback sample questions
    return this.getSampleQuestions();
  }

  static getSampleQuestions() {
    return [
      {
        question: "Which sentence is grammatically correct?",
        options: ["She don't like coffee", "She doesn't like coffee", "She don't likes coffee", "She doesn't likes coffee"],
        correctAnswer: 1,
        skill: "grammar",
        level: "beginner"
      }
      // Add more sample questions as needed
    ];
  }

  static showTestQuestion(index) {
    const testState = appState.getTestState();
    const question = testState.questions[index];
    const t = Utils.getCurrentTranslation();

    appState.updateTestState({ currentQuestion: index });

    document.getElementById('current-question').textContent = index + 1;
    document.getElementById('test-progress-fill').style.width = `${((index + 1) / CONFIG.TOTAL_TEST_QUESTIONS) * 100}%`;

    const questionsContainer = document.getElementById('test-questions');
    questionsContainer.innerHTML = `
      <div class="exercise-item">
        <h4>${t.test.title} ${index + 1}</h4>
        <p>${question.question}</p>
        <div class="answer-options">
          ${question.options.map((option, optIndex) => `
            <div class="answer-option ${testState.answers[index] === optIndex ? 'selected' : ''}" 
                 onclick="TestManager.selectTestAnswer(${index}, ${optIndex})">
              ${String.fromCharCode(65 + optIndex)}. ${option}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.updateNavigationButtons(index, t);
  }

  static updateNavigationButtons(index, t) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = index === 0;

    if (index === CONFIG.TOTAL_TEST_QUESTIONS - 1) {
      nextBtn.innerHTML = `<i class="fas fa-check"></i> ${t.test.finish}`;
      nextBtn.onclick = () => this.finishTest();
    } else {
      nextBtn.innerHTML = `${t.test.next} <i class="fas fa-arrow-right"></i>`;
      nextBtn.onclick = () => this.nextQuestion();
    }
  }

  static selectTestAnswer(questionIndex, answerIndex) {
    const testState = appState.getTestState();
    const newAnswers = { ...testState.answers, [questionIndex]: answerIndex };
    appState.updateTestState({ answers: newAnswers });

    // Update UI
    const options = document.querySelectorAll('.answer-option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[answerIndex].classList.add('selected');
  }

  static nextQuestion() {
    const testState = appState.getTestState();
    if (testState.currentQuestion < CONFIG.TOTAL_TEST_QUESTIONS - 1) {
      this.showTestQuestion(testState.currentQuestion + 1);
    }
  }

  static previousQuestion() {
    const testState = appState.getTestState();
    if (testState.currentQuestion > 0) {
      this.showTestQuestion(testState.currentQuestion - 1);
    }
  }

  static startTimer() {
    let timeLeft = CONFIG.TEST_DURATION;

    const timer = setInterval(() => {
      document.getElementById('timer').textContent = Utils.formatTime(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(timer);
        this.finishTest();
      }
      timeLeft--;
    }, 1000);

    appState.updateTestState({ timer });
  }

  static finishTest() {
    const testState = appState.getTestState();
    const t = Utils.getCurrentTranslation();

    if (testState.timer) {
      clearInterval(testState.timer);
    }

    // Calculate results
    const results = this.calculateResults(testState);
    this.showResults(results, t);
  }

  static calculateResults(testState) {
    let totalScore = 0;
    const totalQuestions = testState.questions.length;

    testState.questions.forEach((question, index) => {
      if (testState.answers[index] === question.correctAnswer) {
        totalScore++;
      }
    });

    const percentage = Utils.calculatePercentage(totalScore, totalQuestions);

    let level = 'beginner';
    if (percentage >= 75) level = 'advanced';
    else if (percentage >= 50) level = 'intermediate';

    return {
      totalScore,
      totalQuestions,
      percentage,
      level
    };
  }

  static showResults(results, t) {
    const modal = document.querySelector('.modal');
    const resultColor = results.percentage >= 75 ? '#10b981' :
      results.percentage >= 50 ? '#f59e0b' : '#ef4444';

    modal.querySelector('.modal-content').innerHTML = `
      <div class="modal-header">
        <h2>${t.test.result}</h2>
        <button class="close-btn" onclick="ModalManager.closeModal()">&times;</button>
      </div>
      
      <div class="test-results">
        <div class="result-score" style="color: ${resultColor}">
          ${results.percentage}%
        </div>
        <h3>${t.test.level}: ${Utils.getLevelName(results.level)}</h3>
        <p>${t.test.score}: ${results.totalScore}/${results.totalQuestions}</p>
        
        <button class="btn btn-primary" onclick="ModalManager.closeModal(); NavigationManager.scrollToSkills();">
          <i class="fas fa-graduation-cap"></i> ${t.test.startLearning}
        </button>
      </div>
    `;
  }
}

// ==================== PROGRESS MANAGEMENT ====================
class ProgressManager {
  static init() {
    this.loadProgress();
  }

  static loadProgress() {
    const savedProgress = localStorage.getItem(CONFIG.STORAGE_KEYS.PROGRESS);
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.updateProgressDisplay(progress);
    }
  }

  static updateProgress(skill, level, score) {
    let progress = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.PROGRESS) || '{}');

    if (!progress[skill]) {
      progress[skill] = {};
    }

    progress[skill][level] = Math.max(progress[skill][level] || 0, score);

    localStorage.setItem(CONFIG.STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    this.updateProgressDisplay(progress);
  }

  static updateProgressDisplay(progress) {
    Object.keys(progress).forEach(skill => {
      const skillProgress = progress[skill];
      const scores = Object.values(skillProgress);
      const avgProgress = scores.reduce((a, b) => a + b, 0) / scores.length;

      const progressCard = document.querySelector(`[data-skill="${skill}"]`)?.closest('.progress-card');
      if (progressCard) {
        const progressBar = progressCard.querySelector('.progress-fill');
        const progressText = progressCard.querySelector('.progress-text');

        if (progressBar) {
          progressBar.style.width = `${avgProgress}%`;
        }

        if (progressText) {
          const t = Utils.getCurrentTranslation();
          progressText.textContent = `${Math.round(avgProgress)}% ${t.progress.completed}`;
        }
      }
    });
  }
}

// ==================== INITIALIZATION ====================
const appState = new AppState();

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  LanguageManager.init();
  NavigationManager.init();
  LessonManager.init();
  ProgressManager.init();
});

// Export for global access (if needed)
window.TestManager = TestManager;
window.LessonManager = LessonManager;
window.ModalManager = ModalManager;
window.NavigationManager = NavigationManager;
window.LanguageManager = LanguageManager;
window.ProgressManager = ProgressManager;

console.log('English Learning Website - Refactored version loaded successfully! 🚀');
