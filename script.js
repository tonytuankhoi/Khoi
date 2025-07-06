// Language system
let currentLanguage = 'vi';

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
      result: 'Kết quả kiểm tra',
      score: 'Điểm số',
      level: 'Trình độ',
      details: 'Chi tiết theo kỹ năng',
      startLearning: 'Bắt đầu học'
    },
    progress: {
      title: 'Tiến Độ Học Tập',
      completed: 'hoàn thành'
    },
    lesson: {
      lessons: 'Bài giảng',
      exercises: 'Bài tập',
      submit: 'Nộp bài',
      result: 'Kết quả',
      excellent: 'Xuất sắc! 🎉',
      good: 'Tốt! 👍',
      needPractice: 'Cần ôn tập thêm! 📚'
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
        description: 'Practice listening comprehension through diverse exercises'
      },
      speaking: {
        title: 'Speaking',
        description: 'Develop communication skills and proper pronunciation'
      },
      reading: {
        title: 'Reading',
        description: 'Improve reading comprehension and vocabulary'
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
      description: 'The test includes 12 questions covering 4 skills (3 questions per skill)',
      time: 'Time: 30 minutes',
      start: 'Start Test',
      previous: 'Previous',
      next: 'Next',
      finish: 'Finish',
      result: 'Test Results',
      score: 'Score',
      level: 'Level',
      details: 'Details by skill',
      startLearning: 'Start Learning'
    },
    progress: {
      title: 'Learning Progress',
      completed: 'completed'
    },
    lesson: {
      lessons: 'Lessons',
      exercises: 'Exercises',
      submit: 'Submit',
      result: 'Result',
      excellent: 'Excellent! 🎉',
      good: 'Good! 👍',
      needPractice: 'Need more practice! 📚'
    }
  }
};

function getCurrentTranslation() {
  return translations[currentLanguage];
}

function switchLanguage() {
  currentLanguage = currentLanguage === 'vi' ? 'en' : 'vi';
  localStorage.setItem('preferredLanguage', currentLanguage);

  // Update language button
  const langBtn = document.querySelector('.language-btn span');
  if (langBtn) {
    langBtn.textContent = currentLanguage === 'vi' ? 'EN' : 'VI';
  }

  updatePageLanguage();

  // Re-attach event listeners after language update
  const startBtn = document.getElementById('start-learning-btn');
  const testBtn = document.getElementById('take-test-btn');

  if (startBtn) {
    startBtn.removeEventListener('click', scrollToSkills);
    startBtn.addEventListener('click', scrollToSkills);
  }
  if (testBtn) {
    testBtn.removeEventListener('click', goToTest);
    testBtn.addEventListener('click', goToTest);
  }
}

function updatePageLanguage() {
  const t = getCurrentTranslation();

  // Update navigation
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length >= 4) {
    navLinks[0].textContent = t.nav.home;
    navLinks[1].textContent = t.nav.skills;
    navLinks[2].textContent = t.nav.test;
    navLinks[3].textContent = t.nav.progress;
  }  // Update hero section
  const heroTitle = document.querySelector('.hero-content h1');
  const heroSubtitle = document.querySelector('.hero-content p');
  const startBtn = document.getElementById('start-learning-btn');
  const testBtn = document.getElementById('take-test-btn');

  if (heroTitle) heroTitle.textContent = t.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
  if (startBtn) {
    const icon = startBtn.querySelector('i');
    const iconClass = icon ? icon.className : 'fas fa-play';
    startBtn.innerHTML = `<i class="${iconClass}"></i> ${t.hero.startButton}`;
  }
  if (testBtn) {
    const icon = testBtn.querySelector('i');
    const iconClass = icon ? icon.className : 'fas fa-clipboard-check';
    testBtn.innerHTML = `<i class="${iconClass}"></i> ${t.hero.testButton}`;
  }

  // Update skills section
  const skillsTitle = document.querySelector('.skills-section .section-title');
  if (skillsTitle) skillsTitle.textContent = t.skills.title;

  const skillCards = document.querySelectorAll('.skill-card');
  const skillKeys = ['listening', 'speaking', 'reading', 'writing'];

  skillCards.forEach((card, index) => {
    const skillKey = skillKeys[index];
    const title = card.querySelector('h3');
    const description = card.querySelector('p');
    const levelBtns = card.querySelectorAll('.level-btn');

    if (title && t.skills[skillKey]) title.textContent = t.skills[skillKey].title;
    if (description && t.skills[skillKey]) description.textContent = t.skills[skillKey].description;

    levelBtns.forEach((btn, levelIndex) => {
      const levelKeys = ['beginner', 'intermediate', 'advanced'];
      btn.textContent = t.skills.levels[levelKeys[levelIndex]];
    });
  });

  // Update progress section
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

function createLanguageSwitcher() {
  const header = document.querySelector('.header .container');
  const languageSwitch = document.createElement('div');
  languageSwitch.className = 'language-switch';
  languageSwitch.innerHTML = `
    <button class="language-btn" onclick="switchLanguage()">
      <i class="fas fa-globe"></i>
      <span>${currentLanguage === 'vi' ? 'EN' : 'VI'}</span>
    </button>
  `;
  header.appendChild(languageSwitch);
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM Content Loaded');

  // Load saved language preference
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
  }
  // Create language switcher
  createLanguageSwitcher();

  // Update page language
  updatePageLanguage();

  // Add event listeners for hero buttons
  const startBtn = document.getElementById('start-learning-btn');
  const testBtn = document.getElementById('take-test-btn');

  console.log('Start button:', startBtn);
  console.log('Test button:', testBtn);

  if (startBtn) {
    startBtn.addEventListener('click', scrollToSkills);
    console.log('Added event listener to start button');
  }
  if (testBtn) {
    testBtn.addEventListener('click', goToTest);
    console.log('Added event listener to test button');
  }

  // Smooth scrolling for navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Initialize skill cards
  initSkillCards();

  // Initialize progress tracking
  initProgressTracking();
});

function scrollToSkills() {
  console.log('scrollToSkills called');
  document.getElementById('skills').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function goToTest() {
  console.log('goToTest called');
  showTestModal();
}

// Lesson data for different skills and levels
const lessonData = {
  listening: {
    beginner: {
      lessons: [
        {
          title: "Bài 1: Chào hỏi cơ bản",
          content: `
                        <h3>Greetings - Chào hỏi</h3>
                        <p>Trong bài này, bạn sẽ học cách chào hỏi trong tiếng Anh:</p>
                        <ul>
                            <li><strong>Hello</strong> - Xin chào</li>
                            <li><strong>Good morning</strong> - Chào buổi sáng</li>
                            <li><strong>Good afternoon</strong> - Chào buổi chiều</li>
                            <li><strong>Good evening</strong> - Chào buổi tối</li>
                            <li><strong>How are you?</strong> - Bạn khỏe không?</li>
                        </ul>
                        <p>🎧 Hãy nghe và lặp lại các câu chào hỏi này.</p>
                    `
        },
        {
          title: "Bài 2: Giới thiệu bản thân",
          content: `
                        <h3>Self Introduction - Giới thiệu bản thân</h3>
                        <p>Học cách giới thiệu bản thân bằng tiếng Anh:</p>
                        <ul>
                            <li><strong>My name is...</strong> - Tên tôi là...</li>
                            <li><strong>I am from...</strong> - Tôi đến từ...</li>
                            <li><strong>I am ... years old</strong> - Tôi ... tuổi</li>
                            <li><strong>Nice to meet you</strong> - Rất vui được gặp bạn</li>
                        </ul>
                        <p>🎧 Nghe các đoạn hội thoại giới thiệu và thực hành.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Nghe đoạn hội thoại và chọn câu trả lời đúng. Người nói đang làm gì?",
          options: [
            "Chào hỏi buổi sáng",
            "Giới thiệu bản thân",
            "Hỏi đường",
            "Đặt hàng đồ ăn"
          ],
          correct: 0
        },
        {
          question: "Trong đoạn hội thoại vừa nghe, người phụ nữ đến từ đâu?",
          options: [
            "Vietnam",
            "Korea",
            "Japan",
            "China"
          ],
          correct: 0
        }
      ]
    },
    intermediate: {
      lessons: [
        {
          title: "Bài 1: Hội thoại về công việc",
          content: `
                        <h3>Job Conversations - Hội thoại về công việc</h3>
                        <p>Học cách nói về công việc và nghề nghiệp:</p>
                        <ul>
                            <li><strong>What do you do?</strong> - Bạn làm nghề gì?</li>
                            <li><strong>I work as a...</strong> - Tôi làm nghề...</li>
                            <li><strong>Where do you work?</strong> - Bạn làm việc ở đâu?</li>
                            <li><strong>How long have you been working there?</strong> - Bạn đã làm ở đó bao lâu?</li>
                        </ul>
                        <p>🎧 Nghe các cuộc phỏng vấn xin việc và thảo luận về công việc.</p>
                    `
        },
        {
          title: "Bài 2: Mua sắm và thanh toán",
          content: `
                        <h3>Shopping and Payment - Mua sắm và thanh toán</h3>
                        <p>Từ vựng và cụm từ khi mua sắm:</p>
                        <ul>
                            <li><strong>How much is this?</strong> - Cái này giá bao nhiêu?</li>
                            <li><strong>Can I pay by card?</strong> - Tôi có thể thanh toán bằng thẻ không?</li>
                            <li><strong>Do you have this in a different size?</strong> - Bạn có cái này size khác không?</li>
                            <li><strong>I'd like to return this</strong> - Tôi muốn trả lại cái này</li>
                        </ul>
                        <p>🎧 Nghe các cuộc hội thoại trong cửa hàng và siêu thị.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Nghe đoạn hội thoại trong cửa hàng. Khách hàng muốn mua gì?",
          options: [
            "Một chiếc áo sơ mi",
            "Một đôi giày",
            "Một chiếc túi xách",
            "Một chiếc đồng hồ"
          ],
          correct: 1
        },
        {
          question: "Giá của sản phẩm là bao nhiêu?",
          options: [
            "$45",
            "$54",
            "$65",
            "$56"
          ],
          correct: 2
        }
      ]
    },
    advanced: {
      lessons: [
        {
          title: "Bài 1: Thảo luận về môi trường",
          content: `
                        <h3>Environmental Discussions - Thảo luận về môi trường</h3>
                        <p>Từ vựng và cụm từ về môi trường:</p>
                        <ul>
                            <li><strong>Climate change</strong> - Biến đổi khí hậu</li>
                            <li><strong>Renewable energy</strong> - Năng lượng tái tạo</li>
                            <li><strong>Carbon footprint</strong> - Dấu chân carbon</li>
                            <li><strong>Sustainable development</strong> - Phát triển bền vững</li>
                        </ul>
                        <p>🎧 Nghe các cuộc thảo luận chuyên sâu về vấn đề môi trường.</p>
                    `
        },
        {
          title: "Bài 2: Tin tức và thời sự",
          content: `
                        <h3>News and Current Affairs - Tin tức và thời sự</h3>
                        <p>Phát triển khả năng nghe hiểu tin tức:</p>
                        <ul>
                            <li><strong>Breaking news</strong> - Tin nóng</li>
                            <li><strong>According to reports</strong> - Theo báo cáo</li>
                            <li><strong>The latest update</strong> - Cập nhật mới nhất</li>
                            <li><strong>In other news</strong> - Tin khác</li>
                        </ul>
                        <p>🎧 Nghe các bản tin thời sự và phân tích tin tức.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Nghe bản tin về biến đổi khí hậu. Nhiệt độ toàn cầu đã tăng bao nhiêu trong thế kỷ qua?",
          options: [
            "0.5°C",
            "1.1°C",
            "1.5°C",
            "2.0°C"
          ],
          correct: 1
        },
        {
          question: "Theo bản tin, giải pháp chính để giảm phát thải carbon là gì?",
          options: [
            "Sử dụng xe điện",
            "Năng lượng tái tạo",
            "Trồng cây xanh",
            "Tất cả các ý trên"
          ],
          correct: 3
        }
      ]
    }
  },
  speaking: {
    beginner: {
      lessons: [
        {
          title: "Bài 1: Phát âm cơ bản",
          content: `
                        <h3>Basic Pronunciation - Phát âm cơ bản</h3>
                        <p>Học cách phát âm các âm cơ bản trong tiếng Anh:</p>
                        <ul>
                            <li><strong>/θ/</strong> - think, three, thank</li>
                            <li><strong>/ð/</strong> - this, that, they</li>
                            <li><strong>/ʃ/</strong> - she, wish, nation</li>
                            <li><strong>/tʃ/</strong> - chair, watch, teach</li>
                        </ul>
                        <p>🎤 Thực hành phát âm từng âm và ghi âm để so sánh.</p>
                    `
        },
        {
          title: "Bài 2: Trọng âm từ",
          content: `
                        <h3>Word Stress - Trọng âm từ</h3>
                        <p>Học cách đặt trọng âm đúng:</p>
                        <ul>
                            <li><strong>'PICture</strong> - Hình ảnh (trọng âm âm tiết đầu)</li>
                            <li><strong>de'CIDE</strong> - Quyết định (trọng âm âm tiết cuối)</li>
                            <li><strong>'IMportant</strong> - Quan trọng</li>
                            <li><strong>infor'MAtion</strong> - Thông tin</li>
                        </ul>
                        <p>🎤 Luyện tập phát âm với trọng âm chính xác.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Phát âm từ 'think' và chọn âm bắt đầu đúng:",
          options: [
            "/f/",
            "/θ/",
            "/s/",
            "/t/"
          ],
          correct: 1
        },
        {
          question: "Trọng âm của từ 'computer' rơi vào âm tiết nào?",
          options: [
            "com-",
            "-pu-",
            "-ter",
            "Không có trọng âm"
          ],
          correct: 1
        }
      ]
    },
    intermediate: {
      lessons: [
        {
          title: "Bài 1: Trình bày ý kiến",
          content: `
                        <h3>Expressing Opinions - Trình bày ý kiến</h3>
                        <p>Học cách bày tỏ ý kiến một cách rõ ràng:</p>
                        <ul>
                            <li><strong>I think that...</strong> - Tôi nghĩ rằng...</li>
                            <li><strong>In my opinion...</strong> - Theo ý kiến của tôi...</li>
                            <li><strong>I believe...</strong> - Tôi tin rằng...</li>
                            <li><strong>From my perspective...</strong> - Từ góc nhìn của tôi...</li>
                        </ul>
                        <p>🎤 Thực hành trình bày ý kiến về các chủ đề khác nhau.</p>
                    `
        },
        {
          title: "Bài 2: Kể chuyện",
          content: `
                        <h3>Storytelling - Kể chuyện</h3>
                        <p>Phát triển kỹ năng kể chuyện:</p>
                        <ul>
                            <li><strong>Once upon a time...</strong> - Ngày xửa ngày xưa...</li>
                            <li><strong>First, then, finally...</strong> - Đầu tiên, sau đó, cuối cùng...</li>
                            <li><strong>Suddenly...</strong> - Đột nhiên...</li>
                            <li><strong>In the end...</strong> - Cuối cùng...</li>
                        </ul>
                        <p>🎤 Luyện tập kể các câu chuyện ngắn với cấu trúc rõ ràng.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Chọn cụm từ phù hợp để bắt đầu trình bày ý kiến:",
          options: [
            "I am thinking...",
            "In my opinion...",
            "Maybe I think...",
            "I am believing..."
          ],
          correct: 1
        },
        {
          question: "Khi kể chuyện, từ nào dùng để chỉ sự thay đổi đột ngột?",
          options: [
            "Then",
            "Suddenly",
            "After",
            "Finally"
          ],
          correct: 1
        }
      ]
    },
    advanced: {
      lessons: [
        {
          title: "Bài 1: Thuyết trình chuyên nghiệp",
          content: `
                        <h3>Professional Presentations - Thuyết trình chuyên nghiệp</h3>
                        <p>Kỹ năng thuyết trình hiệu quả:</p>
                        <ul>
                            <li><strong>Today I'm going to talk about...</strong> - Hôm nay tôi sẽ nói về...</li>
                            <li><strong>Let me start by...</strong> - Hãy để tôi bắt đầu bằng...</li>
                            <li><strong>Moving on to...</strong> - Chuyển sang...</li>
                            <li><strong>To conclude...</strong> - Để kết luận...</li>
                        </ul>
                        <p>🎤 Thực hành thuyết trình 5-10 phút về chủ đề chuyên môn.</p>
                    `
        },
        {
          title: "Bài 2: Tranh luận và thảo luận",
          content: `
                        <h3>Debate and Discussion - Tranh luận và thảo luận</h3>
                        <p>Kỹ năng tranh luận lịch sự và hiệu quả:</p>
                        <ul>
                            <li><strong>I see your point, but...</strong> - Tôi hiểu quan điểm của bạn, nhưng...</li>
                            <li><strong>That's a valid argument, however...</strong> - Đó là lập luận hợp lý, tuy nhiên...</li>
                            <li><strong>I respectfully disagree...</strong> - Tôi không đồng ý một cách lịch sự...</li>
                            <li><strong>On the contrary...</strong> - Ngược lại...</li>
                        </ul>
                        <p>🎤 Tham gia tranh luận về các vấn đề xã hội.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Cụm từ nào phù hợp để bắt đầu một bài thuyết trình?",
          options: [
            "I want to say...",
            "Today I'm going to talk about...",
            "Let me tell you...",
            "I have something to say..."
          ],
          correct: 1
        },
        {
          question: "Cách lịch sự để không đồng ý trong tranh luận:",
          options: [
            "You are wrong",
            "That's not right",
            "I respectfully disagree",
            "No, I don't think so"
          ],
          correct: 2
        }
      ]
    }
  },
  reading: {
    beginner: {
      lessons: [
        {
          title: "Bài 1: Đọc hiểu cơ bản",
          content: `
                        <h3>Basic Reading Comprehension - Đọc hiểu cơ bản</h3>
                        <p>Đọc đoạn văn sau và trả lời câu hỏi:</p>
                        <div style="background: #f0f8ff; padding: 1rem; border-left: 4px solid #2563eb; margin: 1rem 0;">
                            <p><strong>My Daily Routine</strong></p>
                            <p>My name is Sarah. I wake up at 6:00 AM every day. I brush my teeth and have breakfast at 7:00 AM. I go to work at 8:00 AM by bus. I work from 9:00 AM to 5:00 PM. After work, I go to the gym. I have dinner at 7:00 PM and go to bed at 10:00 PM.</p>
                        </div>
                        <p>📖 Học cách tìm thông tin cụ thể trong đoạn văn.</p>
                    `
        },
        {
          title: "Bài 2: Từ vựng trong ngữ cảnh",
          content: `
                        <h3>Vocabulary in Context - Từ vựng trong ngữ cảnh</h3>
                        <p>Học cách đoán nghĩa từ mới qua ngữ cảnh:</p>
                        <div style="background: #f0f8ff; padding: 1rem; border-left: 4px solid #2563eb; margin: 1rem 0;">
                            <p>The weather was <strong>terrible</strong> yesterday. It was raining heavily and very cold. Many people stayed at home because they didn't want to go out in such bad weather.</p>
                        </div>
                        <p>📖 Từ "terrible" có nghĩa là "tệ" dựa vào ngữ cảnh.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Theo đoạn văn về Sarah, cô ấy đi làm lúc mấy giờ?",
          options: [
            "6:00 AM",
            "7:00 AM",
            "8:00 AM",
            "9:00 AM"
          ],
          correct: 2
        },
        {
          question: "Sarah đi làm bằng phương tiện gì?",
          options: [
            "Xe máy",
            "Xe buýt",
            "Xe hơi",
            "Đi bộ"
          ],
          correct: 1
        }
      ]
    },
    intermediate: {
      lessons: [
        {
          title: "Bài 1: Đọc báo tiếng Anh",
          content: `
                        <h3>Reading English News - Đọc báo tiếng Anh</h3>
                        <p>Đọc bài báo sau về công nghệ:</p>
                        <div style="background: #f0f8ff; padding: 1rem; border-left: 4px solid #2563eb; margin: 1rem 0;">
                            <p><strong>AI Technology in Education</strong></p>
                            <p>Artificial Intelligence (AI) is revolutionizing education worldwide. Schools are now using AI-powered tools to personalize learning experiences for students. These systems can identify each student's strengths and weaknesses, providing customized lessons that adapt to their learning pace. Teachers report that students are more engaged and achieve better results when using AI-assisted learning platforms.</p>
                        </div>
                        <p>📖 Phân tích cấu trúc bài báo và từ vựng chuyên ngành.</p>
                    `
        },
        {
          title: "Bài 2: Văn học đơn giản",
          content: `
                        <h3>Simple Literature - Văn học đơn giản</h3>
                        <p>Đọc đoạn trích từ truyện ngắn:</p>
                        <div style="background: #f0f8ff; padding: 1rem; border-left: 4px solid #2563eb; margin: 1rem 0;">
                            <p>The old man sat by the window, watching the rain fall gently on the garden. He remembered the days when he used to play in that same garden as a child. Time had passed so quickly, yet the garden remained unchanged. The roses still bloomed every spring, just as they did fifty years ago.</p>
                        </div>
                        <p>📖 Phát triển khả năng hiểu ngôn ngữ mang tính văn học.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Theo bài báo, AI trong giáo dục giúp gì?",
          options: [
            "Thay thế giáo viên",
            "Cá nhân hóa việc học",
            "Giảm chi phí học tập",
            "Tăng số lượng học sinh"
          ],
          correct: 1
        },
        {
          question: "Trong đoạn văn học, người đàn ông già đang làm gì?",
          options: [
            "Đọc sách",
            "Ngủ",
            "Ngồi xem mưa",
            "Tưới cây"
          ],
          correct: 2
        }
      ]
    },
    advanced: {
      lessons: [
        {
          title: "Bài 1: Phân tích học thuật",
          content: `
                        <h3>Academic Analysis - Phân tích học thuật</h3>
                        <p>Đọc đoạn văn học thuật phức tạp:</p>
                        <div style="background: #f0f8ff; padding: 1rem; border-left: 4px solid #2563eb; margin: 1rem 0;">
                            <p><strong>Climate Change and Economic Impact</strong></p>
                            <p>The economic implications of climate change extend far beyond environmental concerns. Recent studies indicate that global warming could reduce worldwide economic output by 23% by 2100 if current trends continue. The agricultural sector faces the most immediate threats, with crop yields declining due to extreme weather patterns. Furthermore, coastal cities must invest billions in infrastructure to combat rising sea levels, creating significant fiscal burdens for municipal governments.</p>
                        </div>
                        <p>📖 Phân tích lập luận và dữ liệu trong văn bản học thuật.</p>
                    `
        },
        {
          title: "Bài 2: Văn học cổ điển",
          content: `
                        <h3>Classical Literature - Văn học cổ điển</h3>
                        <p>Đọc đoạn trích từ tác phẩm cổ điển:</p>
                        <div style="background: #f0f8ff; padding: 1rem; border-left: 4px solid #2563eb; margin: 1rem 0;">
                            <p>"It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair."</p>
                            <p><em>- Charles Dickens, A Tale of Two Cities</em></p>
                        </div>
                        <p>📖 Hiểu phong cách và kỹ thuật tu từ trong văn học cổ điển.</p>
                    `
        }
      ],
      exercises: [
        {
          question: "Theo đoạn văn học thuật, biến đổi khí hậu có thể giảm sản lượng kinh tế toàn cầu bao nhiêu?",
          options: [
            "15%",
            "20%",
            "23%",
            "25%"
          ],
          correct: 2
        },
        {
          question: "Đoạn trích của Dickens sử dụng kỹ thuật tu từ nào?",
          options: [
            "Ẩn dụ",
            "Điệp từ",
            "Đối lập",
            "Nhân hóa"
          ],
          correct: 2
        }
      ]
    }
  },
  writing: {
    beginner: {
      lessons: [
        {
          title: "Bài 1: Viết câu cơ bản",
          content: `
                        <h3>Basic Sentence Writing - Viết câu cơ bản</h3>
                        <p>Học cách tạo câu hoàn chỉnh với cấu trúc S-V-O:</p>
                        <ul>
                            <li><strong>Subject + Verb + Object</strong></li>
                            <li>I (S) + eat (V) + breakfast (O)</li>
                            <li>She (S) + reads (V) + books (O)</li>
                            <li>We (S) + play (V) + football (O)</li>
                        </ul>
                        <p>✍️ Viết 5 câu đơn giản theo cấu trúc S-V-O.</p>
                        <textarea placeholder="Viết câu của bạn ở đây..." style="width: 100%; height: 100px; padding: 1rem; border: 1px solid #ccc; border-radius: 8px; margin-top: 1rem;"></textarea>
                    `
        },
        {
          title: "Bài 2: Viết đoạn văn ngắn",
          content: `
                        <h3>Short Paragraph Writing - Viết đoạn văn ngắn</h3>
                        <p>Cấu trúc đoạn văn cơ bản:</p>
                        <ul>
                            <li><strong>Topic sentence</strong> - Câu chủ đề</li>
                            <li><strong>Supporting sentences</strong> - Câu hỗ trợ</li>
                            <li><strong>Concluding sentence</strong> - Câu kết luận</li>
                        </ul>
                        <p>✍️ Viết một đoạn văn về ngày của bạn (50-70 từ).</p>
                        <textarea placeholder="Viết đoạn văn của bạn ở đây..." style="width: 100%; height: 150px; padding: 1rem; border: 1px solid #ccc; border-radius: 8px; margin-top: 1rem;"></textarea>
                    `
        }
      ],
      exercises: [
        {
          question: "Chọn câu có cấu trúc S-V-O đúng:",
          options: [
            "Eat I breakfast",
            "I eat breakfast",
            "Breakfast eat I",
            "I breakfast eat"
          ],
          correct: 1
        },
        {
          question: "Trong đoạn văn, câu nào thường đứng đầu?",
          options: [
            "Câu kết luận",
            "Câu hỗ trợ",
            "Câu chủ đề",
            "Câu chuyển tiếp"
          ],
          correct: 2
        }
      ]
    },
    intermediate: {
      lessons: [
        {
          title: "Bài 1: Viết email chính thức",
          content: `
                        <h3>Formal Email Writing - Viết email chính thức</h3>
                        <p>Cấu trúc email chính thức:</p>
                        <ul>
                            <li><strong>Subject:</strong> Chủ đề rõ ràng</li>
                            <li><strong>Greeting:</strong> Dear Mr./Ms. [Name]</li>
                            <li><strong>Body:</strong> Nội dung chính</li>
                            <li><strong>Closing:</strong> Best regards, Sincerely</li>
                        </ul>
                        <p>✍️ Viết email xin việc (150-200 từ).</p>
                        <textarea placeholder="Viết email của bạn ở đây..." style="width: 100%; height: 200px; padding: 1rem; border: 1px solid #ccc; border-radius: 8px; margin-top: 1rem;"></textarea>
                    `
        },
        {
          title: "Bài 2: Viết bài luận ý kiến",
          content: `
                        <h3>Opinion Essay - Bài luận ý kiến</h3>
                        <p>Cấu trúc bài luận ý kiến:</p>
                        <ul>
                            <li><strong>Introduction:</strong> Giới thiệu chủ đề và quan điểm</li>
                            <li><strong>Body paragraphs:</strong> Lập luận và ví dụ</li>
                            <li><strong>Conclusion:</strong> Tóm tắt và khẳng định lại quan điểm</li>
                        </ul>
                        <p>✍️ Viết bài luận về "Lợi ích của việc học tiếng Anh" (250-300 từ).</p>
                        <textarea placeholder="Viết bài luận của bạn ở đây..." style="width: 100%; height: 250px; padding: 1rem; border: 1px solid #ccc; border-radius: 8px; margin-top: 1rem;"></textarea>
                    `
        }
      ],
      exercises: [
        {
          question: "Cách chào trong email chính thức:",
          options: [
            "Hi there!",
            "Hello!",
            "Dear Sir/Madam,",
            "Hey!"
          ],
          correct: 2
        },
        {
          question: "Trong bài luận ý kiến, đâu là phần quan trọng nhất?",
          options: [
            "Mở bài",
            "Thân bài với lập luận",
            "Kết bài",
            "Tiêu đề"
          ],
          correct: 1
        }
      ]
    },
    advanced: {
      lessons: [
        {
          title: "Bài 1: Viết báo cáo chuyên nghiệp",
          content: `
                        <h3>Professional Report Writing - Viết báo cáo chuyên nghiệp</h3>
                        <p>Cấu trúc báo cáo chuyên nghiệp:</p>
                        <ul>
                            <li><strong>Executive Summary</strong> - Tóm tắt điều hành</li>
                            <li><strong>Introduction</strong> - Giới thiệu</li>
                            <li><strong>Methodology</strong> - Phương pháp</li>
                            <li><strong>Findings</strong> - Phát hiện</li>
                            <li><strong>Recommendations</strong> - Khuyến nghị</li>
                        </ul>
                        <p>✍️ Viết báo cáo về tình hình kinh tế (400-500 từ).</p>
                        <textarea placeholder="Viết báo cáo của bạn ở đây..." style="width: 100%; height: 300px; padding: 1rem; border: 1px solid #ccc; border-radius: 8px; margin-top: 1rem;"></textarea>
                    `
        },
        {
          title: "Bài 2: Viết bài nghiên cứu",
          content: `
                        <h3>Research Paper Writing - Viết bài nghiên cứu</h3>
                        <p>Các yếu tố của bài nghiên cứu:</p>
                        <ul>
                            <li><strong>Abstract</strong> - Tóm tắt</li>
                            <li><strong>Literature Review</strong> - Tổng quan tài liệu</li>
                            <li><strong>Research Questions</strong> - Câu hỏi nghiên cứu</li>
                            <li><strong>Analysis</strong> - Phân tích</li>
                            <li><strong>Conclusion</strong> - Kết luận</li>
                        </ul>
                        <p>✍️ Viết phần Abstract cho nghiên cứu về AI (150-200 từ).</p>
                        <textarea placeholder="Viết Abstract của bạn ở đây..." style="width: 100%; height: 200px; padding: 1rem; border: 1px solid #ccc; border-radius: 8px; margin-top: 1rem;"></textarea>
                    `
        }
      ],
      exercises: [
        {
          question: "Phần nào của báo cáo nên viết cuối cùng?",
          options: [
            "Introduction",
            "Methodology",
            "Executive Summary",
            "Findings"
          ],
          correct: 2
        },
        {
          question: "Abstract trong bài nghiên cứu thường có bao nhiêu từ?",
          options: [
            "50-100 từ",
            "150-250 từ",
            "300-400 từ",
            "500+ từ"
          ],
          correct: 1
        }
      ]
    }
  }
};

// Test questions for skill assessment
const testQuestions = {
  listening: [
    {
      question: "Nghe đoạn hội thoại. Người đàn ông đang làm gì?",
      options: ["Đặt hàng đồ ăn", "Hỏi đường", "Mua vé xem phim", "Thanh toán hóa đơn"],
      correct: 0,
      level: "beginner"
    },
    {
      question: "Trong cuộc họp, vấn đề chính được thảo luận là gì?",
      options: ["Tăng lương", "Dự án mới", "Thay đổi văn phòng", "Đào tạo nhân viên"],
      correct: 1,
      level: "intermediate"
    },
    {
      question: "Theo bản tin, tác động của biến đổi khí hậu đến nông nghiệp là gì?",
      options: ["Tăng năng suất", "Giảm diện tích canh tác", "Thay đổi mùa vụ", "Tất cả đều đúng"],
      correct: 3,
      level: "advanced"
    }
  ],
  speaking: [
    {
      question: "Cách phát âm đúng của 'th' trong 'think':",
      options: ["/f/", "/θ/", "/s/", "/t/"],
      correct: 1,
      level: "beginner"
    },
    {
      question: "Cụm từ nào phù hợp để bày tỏ ý kiến?",
      options: ["I am thinking", "In my opinion", "Maybe I think", "I am believing"],
      correct: 1,
      level: "intermediate"
    },
    {
      question: "Trong thuyết trình chuyên nghiệp, cách kết thúc phù hợp:",
      options: ["That's all", "I'm done", "To conclude", "End of presentation"],
      correct: 2,
      level: "advanced"
    }
  ],
  reading: [
    {
      question: "Chủ đề chính của đoạn văn về Sarah là gì?",
      options: ["Công việc", "Thói quen hàng ngày", "Sở thích", "Gia đình"],
      correct: 1,
      level: "beginner"
    },
    {
      question: "AI trong giáo dục chủ yếu giúp:",
      options: ["Thay thế giáo viên", "Cá nhân hóa học tập", "Giảm chi phí", "Tăng học sinh"],
      correct: 1,
      level: "intermediate"
    },
    {
      question: "Biến đổi khí hậu có thể giảm GDP toàn cầu:",
      options: ["15%", "20%", "23%", "25%"],
      correct: 2,
      level: "advanced"
    }
  ],
  writing: [
    {
      question: "Cấu trúc câu cơ bản trong tiếng Anh:",
      options: ["V-S-O", "S-V-O", "O-S-V", "S-O-V"],
      correct: 1,
      level: "beginner"
    },
    {
      question: "Cách chào trong email chính thức:",
      options: ["Hi there!", "Hello!", "Dear Sir/Madam,",
        "Hey!"],
      correct: 2,
      level: "intermediate"
    },
    {
      question: "Phần nào của báo cáo nên viết cuối cùng?",
      options: [
        "Introduction",
        "Methodology",
        "Executive Summary",
        "Findings"
      ],
      correct: 2,
      level: "advanced"
    }
  ]
};

function initSkillCards() {
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    const levelBtns = card.querySelectorAll('.level-btn');

    levelBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const skill = card.dataset.skill;
        const level = this.dataset.level;
        showLessonModal(skill, level);
      });
    });
  });
}

function showLessonModal(skill, level) {
  const t = getCurrentTranslation();
  const modal = createModal(`${skill.charAt(0).toUpperCase() + skill.slice(1)} - ${getLevelName(level)}`);

  const skillData = lessonData[skill][level];

  const content = `
        <div class="lesson-nav">
            <button class="lesson-tab active" data-tab="lessons">${t.lesson.lessons}</button>
            <button class="lesson-tab" data-tab="exercises">${t.lesson.exercises}</button>
        </div>
        
        <div id="lessons-section" class="lesson-section active">
            <div class="lessons-list">
                ${skillData.lessons.map((lesson, index) => `
                    <div class="lesson-item" style="background: #f8fafc; padding: 1.5rem; border-radius: 12px; margin-bottom: 1rem;">
                        <h4 style="color: #2563eb; margin-bottom: 1rem;">${lesson.title}</h4>
                        <div>${lesson.content}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div id="exercises-section" class="lesson-section">
            <div class="exercises-list">
                ${skillData.exercises.map((exercise, index) => `
                    <div class="exercise-item">
                        <h4>${currentLanguage === 'vi' ? 'Câu hỏi' : 'Question'} ${index + 1}</h4>
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
                <button class="submit-btn" onclick="submitExercises('${skill}', '${level}')">
                    <i class="fas fa-check"></i> ${t.lesson.submit}
                </button>
            </div>
        </div>
    `;

  modal.querySelector('.modal-content').innerHTML += content;

  // Add tab switching functionality
  const tabs = modal.querySelectorAll('.lesson-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const sections = modal.querySelectorAll('.lesson-section');
      sections.forEach(s => s.classList.remove('active'));

      const targetSection = modal.querySelector(`#${this.dataset.tab}-section`);
      targetSection.classList.add('active');
    });
  });

  // Add answer selection functionality
  const answerOptions = modal.querySelectorAll('.answer-option');
  answerOptions.forEach(option => {
    option.addEventListener('click', function () {
      const questionIndex = this.dataset.question;
      const sameQuestion = modal.querySelectorAll(`[data-question="${questionIndex}"]`);
      sameQuestion.forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  document.body.appendChild(modal);
  modal.style.display = 'flex';
}

function submitExercises(skill, level) {
  const t = getCurrentTranslation();
  const modal = document.querySelector('.modal');
  const selectedAnswers = modal.querySelectorAll('.answer-option.selected');

  let score = 0;
  const totalQuestions = lessonData[skill][level].exercises.length;

  selectedAnswers.forEach(answer => {
    const questionIndex = parseInt(answer.dataset.question);
    const answerIndex = parseInt(answer.dataset.answer);
    const correctAnswer = lessonData[skill][level].exercises[questionIndex].correct;

    if (answerIndex === correctAnswer) {
      score++;
    }
  });

  const percentage = Math.round((score / totalQuestions) * 100);

  const resultMessage = `${t.lesson.result}: ${score}/${totalQuestions} (${percentage}%)\n\n` +
    `${percentage >= 80 ? t.lesson.excellent :
      percentage >= 60 ? t.lesson.good :
        t.lesson.needPractice}`;

  alert(resultMessage);

  // Update progress
  updateProgress(skill, level, percentage);

  closeModal();
}

function showTestModal() {
  const t = getCurrentTranslation();
  const modal = createModal(t.test.title);

  const content = `
        <div class="test-intro" style="text-align: center; margin-bottom: 2rem;">
            <h3>${t.test.intro}</h3>
            <p>${t.test.description}</p>
            <p>${t.test.time}</p>
            <button class="btn btn-primary" onclick="startTest()" style="margin-top: 1rem;">
                <i class="fas fa-play"></i> ${t.test.start}
            </button>
        </div>
        
        <div id="test-content" style="display: none;">
            <div id="test-progress" style="margin-bottom: 2rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Câu <span id="current-question">1</span>/12</span>
                    <span id="timer">30:00</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" id="test-progress-fill" style="width: 8.33%"></div>
                </div>
            </div>
            
            <div id="test-questions"></div>
            
            <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
                <button class="btn btn-secondary" onclick="previousQuestion()" id="prev-btn" disabled>
                    <i class="fas fa-arrow-left"></i> ${t.test.previous}
                </button>
                <button class="btn btn-primary" onclick="nextQuestion()" id="next-btn">
                    ${t.test.next} <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;

  modal.querySelector('.modal-content').innerHTML += content;
  document.body.appendChild(modal);
  modal.style.display = 'flex';
}

let currentTestQuestion = 0;
let testAnswers = {};
let testTimer;
let allTestQuestions = [];

function startTest() {
  // Prepare all test questions
  allTestQuestions = [];
  Object.keys(testQuestions).forEach(skill => {
    testQuestions[skill].forEach(q => {
      allTestQuestions.push({ ...q, skill });
    });
  });

  // Shuffle questions
  allTestQuestions = allTestQuestions.sort(() => Math.random() - 0.5);

  document.querySelector('.test-intro').style.display = 'none';
  document.getElementById('test-content').style.display = 'block';

  // Add question navigator
  addQuestionNavigator();

  // Add keyboard navigation
  addKeyboardNavigation();

  showTestQuestion(0);
  startTimer();
}

function showTestQuestion(index) {
  const t = getCurrentTranslation();
  currentTestQuestion = index;
  const question = allTestQuestions[index];

  document.getElementById('current-question').textContent = index + 1;
  document.getElementById('test-progress-fill').style.width = `${((index + 1) / 12) * 100}%`;

  const questionsContainer = document.getElementById('test-questions');
  questionsContainer.innerHTML = `
        <div class="exercise-item">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                <div style="background: ${getSkillColor(question.skill)}; color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: 600;">
                    ${getSkillName(question.skill)}
                </div>
                <span style="color: #64748b; font-size: 0.9rem;">${getLevelName(question.level)}</span>
            </div>
            <h4>${currentLanguage === 'vi' ? 'Câu' : 'Question'} ${index + 1}</h4>
            <p>${question.question}</p>
            <div class="answer-options">
                ${question.options.map((option, optIndex) => `
                    <div class="answer-option ${testAnswers[index] === optIndex ? 'selected' : ''}" 
                         onclick="selectTestAnswer(${index}, ${optIndex})">
                        ${String.fromCharCode(65 + optIndex)}. ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
  // Update navigation buttons
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  prevBtn.disabled = index === 0;
  prevBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${t.test.previous}`;

  if (index === 11) {
    nextBtn.innerHTML = `<i class="fas fa-check"></i> ${t.test.finish}`;
    nextBtn.onclick = finishTest;
  } else {
    nextBtn.innerHTML = `${t.test.next} <i class="fas fa-arrow-right"></i>`;
    nextBtn.onclick = nextQuestion;
  }
  // Update question navigator
  updateQuestionNavigator();
}

function selectTestAnswer(questionIndex, answerIndex) {
  testAnswers[questionIndex] = answerIndex;

  // Update UI
  const options = document.querySelectorAll('.answer-option');
  options.forEach(opt => opt.classList.remove('selected'));
  options[answerIndex].classList.add('selected');

  // Update question navigator
  updateQuestionNavigator();
}

function nextQuestion() {
  if (currentTestQuestion < 11) {
    showTestQuestion(currentTestQuestion + 1);
  }
}

function previousQuestion() {
  if (currentTestQuestion > 0) {
    showTestQuestion(currentTestQuestion - 1);
  }
}

function startTimer() {
  let timeLeft = 30 * 60; // 30 minutes in seconds

  testTimer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent =
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(testTimer);
      finishTest();
    }
    timeLeft--;
  }, 1000);
}

function finishTest() {
  clearInterval(testTimer);
  const t = getCurrentTranslation();

  // Calculate results
  let totalScore = 0;
  const skillScores = { listening: 0, speaking: 0, reading: 0, writing: 0 };
  const skillCounts = { listening: 0, speaking: 0, reading: 0, writing: 0 };

  allTestQuestions.forEach((question, index) => {
    skillCounts[question.skill]++;
    if (testAnswers[index] === question.correct) {
      totalScore++;
      skillScores[question.skill]++;
    }
  });

  // Calculate percentages
  Object.keys(skillScores).forEach(skill => {
    skillScores[skill] = Math.round((skillScores[skill] / skillCounts[skill]) * 100);
  });

  const totalPercentage = Math.round((totalScore / 12) * 100);

  // Determine level
  let level = 'beginner';
  if (totalPercentage >= 75) level = 'advanced';
  else if (totalPercentage >= 50) level = 'intermediate';

  // Show results
  const modal = document.querySelector('.modal');
  modal.querySelector('.modal-content').innerHTML = `
        <div class="modal-header">
            <h2>${t.test.result}</h2>
            <button class="close-btn" onclick="closeModal()">&times;</button>
        </div>
        
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 3rem; color: ${totalPercentage >= 75 ? '#10b981' : totalPercentage >= 50 ? '#f59e0b' : '#ef4444'}; margin-bottom: 1rem;">
                ${totalPercentage}%
            </div>
            <h3>${t.test.level}: ${getLevelName(level)}</h3>
            <p>${t.test.score}: ${totalScore}/12</p>
        </div>
        
        <div class="skills-results">
            <h4 style="margin-bottom: 1.5rem;">${t.test.details}:</h4>
            ${Object.keys(skillScores).map(skill => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #f8fafc; border-radius: 8px; margin-bottom: 1rem;">
                    <div>
                        <strong>${getSkillName(skill)}</strong>
                    </div>
                    <div style="color: ${skillScores[skill] >= 75 ? '#10b981' : skillScores[skill] >= 50 ? '#f59e0b' : '#ef4444'}; font-weight: 600;">
                        ${skillScores[skill]}%
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="closeModal(); scrollToSkills();">
                <i class="fas fa-graduation-cap"></i> ${t.test.startLearning}
            </button>
        </div>
    `;
}

function createModal(title) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="close-btn" onclick="closeModal()">&times;</button>
            </div>
        </div>
    `;

  // Close modal when clicking outside
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  return modal;
}

function closeModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.remove();
  }
  if (testTimer) {
    clearInterval(testTimer);
  }
}

function getLevelName(level) {
  const levels = {
    beginner: 'Cơ bản',
    intermediate: 'Trung cấp',
    advanced: 'Nâng cao'
  };
  return levels[level] || level;
}

function getSkillName(skill) {
  const skills = {
    listening: 'Listening (Nghe)',
    speaking: 'Speaking (Nói)',
    reading: 'Reading (Đọc)',
    writing: 'Writing (Viết)'
  };
  return skills[skill] || skill;
}

function getSkillColor(skill) {
  const colors = {
    listening: '#3b82f6',
    speaking: '#10b981',
    reading: '#f59e0b',
    writing: '#8b5cf6'
  };
  return colors[skill] || '#6b7280';
}

function initProgressTracking() {
  // Load progress from localStorage if available
  const savedProgress = localStorage.getItem('englishLearnerProgress');
  if (savedProgress) {
    const progress = JSON.parse(savedProgress);
    updateProgressDisplay(progress);
  }
}

function updateProgress(skill, level, score) {
  let progress = JSON.parse(localStorage.getItem('englishLearnerProgress') || '{}');

  if (!progress[skill]) {
    progress[skill] = {};
  }

  progress[skill][level] = Math.max(progress[skill][level] || 0, score);

  localStorage.setItem('englishLearnerProgress', JSON.stringify(progress));
  updateProgressDisplay(progress);
}

function updateProgressDisplay(progress) {
  Object.keys(progress).forEach(skill => {
    const skillProgress = progress[skill];
    const avgProgress = Object.values(skillProgress).reduce((a, b) => a + b, 0) / Object.values(skillProgress).length;

    const progressCard = document.querySelector(`.progress-card h4:contains("${getSkillName(skill).split(' ')[0]}")`);
    if (progressCard) {
      const progressBar = progressCard.parentElement.querySelector('.progress-fill');
      const progressText = progressCard.parentElement.querySelector('span');

      progressBar.style.width = `${avgProgress}%`;
      progressText.textContent = `${Math.round(avgProgress)}% hoàn thành`;
    }
  });
}

// Test navigation improvements
function goToQuestion(questionIndex) {
  if (questionIndex >= 0 && questionIndex < allTestQuestions.length) {
    showTestQuestion(questionIndex);
  }
}

function addQuestionNavigator() {
  const testContent = document.getElementById('test-content');
  if (testContent && !testContent.querySelector('.question-navigator')) {
    const navigator = document.createElement('div');
    navigator.className = 'question-navigator';
    navigator.innerHTML = `
      <div style="margin-bottom: 1rem; text-align: center;">
        <small style="color: #64748b;">${currentLanguage === 'vi' ? 'Bấm vào số để chuyển câu' : 'Click number to jump to question'}</small>
      </div>
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.5rem;">
        ${Array.from({ length: 12 }, (_, i) => `
          <button class="question-nav-btn" data-question="${i}" onclick="goToQuestion(${i})">
            ${i + 1}
          </button>
        `).join('')}
      </div>
    `;
    testContent.insertBefore(navigator, testContent.firstChild);
  }
}

function updateQuestionNavigator() {
  const navBtns = document.querySelectorAll('.question-nav-btn');
  navBtns.forEach((btn, index) => {
    btn.classList.remove('current', 'answered');
    if (index === currentTestQuestion) {
      btn.classList.add('current');
    }
    if (testAnswers[index] !== undefined) {
      btn.classList.add('answered');
    }
  });
}

// Keyboard navigation
function addKeyboardNavigation() {
  document.addEventListener('keydown', function (e) {
    if (!document.querySelector('.modal') || !document.getElementById('test-content')) return;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      previousQuestion();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentTestQuestion < 11) {
        nextQuestion();
      }
    } else if (e.key >= '1' && e.key <= '4') {
      e.preventDefault();
      const optionIndex = parseInt(e.key) - 1;
      selectTestAnswer(currentTestQuestion, optionIndex);
    }
  });
}

// Enhanced test navigation functionality