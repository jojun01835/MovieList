// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase 설정 정보를 아래에 붙여넣기합니다.
const firebaseConfig = {
  apiKey: "AIzaSyAK5VKSfxfJ3vvmbAd4TqwD-5YnZQTWX78",
  authDomain: "movielist-5b45e.firebaseapp.com",
  projectId: "movielist-5b45e",
  storageBucket: "movielist-5b45e.appspot.com",
  messagingSenderId: "899732751976",
  appId: "1:899732751976:web:8e63386fb29aadedb89ddd",
  measurementId: "G-C4C64N28CZ",
};

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);

// Firestore 인스턴스 생성
const firestore = getFirestore(firebaseApp);

// 인증 인스턴스 생성
const auth = getAuth(firebaseApp);

export { firebaseApp, firestore, auth };
