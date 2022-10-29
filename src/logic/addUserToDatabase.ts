import { getAuth } from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";

async function addUserToDatabase() {
    const auth = getAuth();
    const db = getDatabase();

    const user = auth.currentUser;

    // Check if it's already in the database
    if (await doesUserExist()) {
        console.log("User already exists");
        return;
    };

    // Add to database
    const dbUser = {
        "name": user.displayName,
        "email": user.email,
        "permissionLevel": 0,
    }

    set(ref(db, `users/${user.uid}`), dbUser);
}

const doesUserExist = () => new Promise(async (resolve, reject) => {
    const snapshot = await get(ref(getDatabase(), `users/${getAuth().currentUser.uid}`));

    resolve(snapshot.val() !== null);
})  

export { addUserToDatabase };