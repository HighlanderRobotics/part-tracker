<script lang="ts">
  import { getAuth, signOut } from "firebase/auth";
  // @ts-ignore
  import { userStore } from "/src/stores/auth";
</script>

<button class="account-button" on:click={() => signOut(getAuth())}>
  <img src={$userStore.photoURL} alt="">
  <div class="text">
    <span class="displayname">
      {$userStore.displayName}
    </span>
    <span class="logout-label">
      Sign out
    </span>
  </div>
</button>

<style>
  .account-button {
    padding: 0.5rem 0.5rem;

    display: flex;
    align-items: center;
  }

  img {
    height: 3.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .displayname {
    font-size: 1.1rem;
  }

  .logout-label {
    color: #777;
    font-size: 0.9rem;
  }
</style>