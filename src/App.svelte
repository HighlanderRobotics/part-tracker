<script lang="ts">
  import FloatingControls from "./lib/FloatingControls.svelte";
  import LoginPage from "./lib/LoginPage.svelte";
  import PartsList from "./lib/PartsList.svelte";
  import TopBar from "./lib/TopBar.svelte";

  import { userStore } from "./stores/auth";
</script>

{#if $userStore} <!-- If the user is signed in -->
  <TopBar />
  <FloatingControls />
  <main>
    <PartsList />
  </main>
{:else}
  <LoginPage />
{/if}

<style>
  main {
    padding-top: 5.9375rem;
  }
</style>