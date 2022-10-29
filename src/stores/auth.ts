import { writable } from "svelte/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const userStore = writable(auth.currentUser);

onAuthStateChanged(auth, (newUser) => {
    userStore.set(newUser);
});

export { userStore }