<script>
    import { getAuth } from "firebase/auth";
    // @ts-ignore
    import { userStore } from "/src/stores/auth.ts";

    import CenteredBlockPage from "./reusable/CenteredBlockPage.svelte";

    const auth = getAuth();
</script>


    <CenteredBlockPage>
        <h1>No permission</h1>
        <p>You are not authorized to access this page.</p>
        <p>Signed in as {$userStore.displayName} ({$userStore.email})</p>
        <button data-variant="primary" on:click={() => auth.signOut()}>Sign out</button>
    </CenteredBlockPage>


  <style>
    button {
      margin-top: 1rem;
    }
  </style>