import { writable } from "svelte/store";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { get, getDatabase, ref } from "firebase/database";
// @ts-ignore
import { addUserToDatabase } from "/src/logic/addUserToDatabase";

const auth = getAuth();
const db = getDatabase();

const userStore = writable<User | null>(auth.currentUser);

onAuthStateChanged(auth, async (newUser) => {
    if (newUser === null) {
        permissionLevelStore.set("logged-out");
        userStore.set(newUser);
        return;
    }

    permissionLevelStore.set("loading");

    userStore.set(newUser);

    await addUserToDatabase(newUser);

    // Get permission level

    get(ref(db, `users/${newUser.uid}/permissionLevel`))
        .then((snapshot) => {
            permissionLevelStore.set(snapshot.val());
        });
});

type permissionLevel = "logged-out" | "loading" | number

const permissionLevelStore = writable<permissionLevel>("logged-out");

export { userStore, permissionLevelStore }
export type { permissionLevel }