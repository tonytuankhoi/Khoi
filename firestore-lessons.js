import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getFirestore, collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Thay bằng config của bạn
const firebaseConfig = {
  apiKey: "AIzaSyAPUBwXQhhd_CfiwsAtJgc_GF2IVBk01qs",
  authDomain: "cuoikhoa-8bef5.firebaseapp.com",
  projectId: "cuoikhoa-8bef5",
  storageBucket: "cuoikhoa-8bef5.appspot.com",
  messagingSenderId: "658549382274",
  appId: "1:658549382274:web:edf0f890a77c704cb5289b",
  measurementId: "G-FQHWY59NP7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Hàm lấy bài học từ Firestore
export async function fetchLessons(skill, level) {
  // Giả sử bạn lưu bài học ở collection "lessons" với trường skill, level
  const q = query(
    collection(db, "lessons"),
    where("skill", "==", skill),
    where("level", "==", level)
  );
  const snapshot = await getDocs(q);
  const lessons = [];
  snapshot.forEach(doc => lessons.push(doc.data()));
  return lessons;
}

// Hàm lấy bài tập từ Firestore
export async function fetchExercises(skill, level) {
  // Giả sử bạn lưu bài tập ở collection "exercises" với trường skill, level
  const q = query(
    collection(db, "exercises"),
    where("skill", "==", skill),
    where("level", "==", level)
  );
  const snapshot = await getDocs(q);
  const exercises = [];
  snapshot.forEach(doc => exercises.push(doc.data()));
  return exercises;
}