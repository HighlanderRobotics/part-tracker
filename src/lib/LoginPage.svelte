<script lang="ts">
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import CenteredBlockPage from "./reusable/CenteredBlockPage.svelte";

  function signIn() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

    const auth = getAuth();

    signInWithPopup(auth, provider);
  }
</script>

<CenteredBlockPage>
  <h1>Sign in</h1>
  <p>You need to sign in with an authorized account to access this tool.</p>

  <button data-variant="primary" on:click={signIn}>Sign in with Google</button>
</CenteredBlockPage>

<style>

  button {
    margin-top: 1rem;
  }
</style>