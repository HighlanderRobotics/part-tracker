import { writable } from "svelte/store";

import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhITgMkCYep-NrSmrjjeVxBHDUGarppaM",
  authDomain: "part-tracker-5ab96.firebaseapp.com",
  projectId: "part-tracker-5ab96",
  storageBucket: "part-tracker-5ab96.appspot.com",
  messagingSenderId: "818733045633",
  appId: "1:818733045633:web:ba0f128c7f28a1f7793a80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const partsRef = ref(db, "parts");

export const parts = writable(get(partsRef));

onValue(partsRef, (snapshot) => {
  parts.set(snapshot.val());
});

onAuthStateChanged(getAuth(), (e) => {
  get(partsRef).then((snapshot) => {
    parts.set(snapshot.val());
  })
})