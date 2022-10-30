<script>
    import { getAuth } from "firebase/auth";
    // @ts-ignore
    import { userStore } from "/src/stores/auth.ts";

    const auth = getAuth();
</script>

<main>
    <div class="center">
      <div class="left">
        <img src="src/assets/logo.jpg" alt="8033 logo">
      </div>
      <div class="right">
        <h1>No permission</h1>
        <p>You are not authorized to access this page.</p>
  
        <p>Signed in as {$userStore.displayName} ({$userStore.email})</p>

        <button data-variant="primary" on:click={() => auth.signOut()}>Sign out</button>
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