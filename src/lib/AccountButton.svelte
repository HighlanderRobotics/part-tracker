<script lang="ts">
  import AccountDialog from "./AccountDialog.svelte";
  import Dialog from "./reusable/Dialog.svelte";
  // @ts-ignore
  import { userStore } from "/src/stores/auth";

  let dialogOpen = false;
</script>

<button class="account-button" on:click={() => dialogOpen = true}>
  <img src={$userStore.photoURL} alt="Profile">
  <div class="text">
    <span class="displayname">
      {$userStore.displayName}
    </span>
  </div>
</button>

<Dialog bind:open={dialogOpen} defaultPadding={false}>
  <AccountDialog close={() => dialogOpen = false} />
</Dialog>

<style>
  .account-button {
    padding: 0.5rem 0.5rem;

    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 720px) {
    img {
      display: none;
    }
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
</style>