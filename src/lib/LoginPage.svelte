<script lang="ts">
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  // @ts-ignore
  import { addUserToDatabase } from "/src/logic/addUserToDatabase.ts";

  function signIn() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then(() => {
        addUserToDatabase();
      })
  }
</script>

<main>
  <div class="center">
    <div class="left">
      <img src="src/assets/logo.jpg" alt="8033 logo">
    </div>
    <div class="right">
      <h1>Sign in</h1>
      <p>You need to sign in with an authorized account to access this tool.</p>

      <button data-variant="primary" on:click={signIn}>Sign in with Google</button>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-color: #520288;
  }

  .center {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.4rem;

    display: flex;
    align-items: center;
  }

  .right {
    margin: 1rem;
  }

  img {
    height: 10rem;
  }

  button {
    margin-top: 1rem;
  }
</style>