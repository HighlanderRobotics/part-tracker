<script lang="ts">
  import FloatingControls from "./lib/FloatingControls.svelte";
  import LoginPage from "./lib/LoginPage.svelte";
  import NoPermissionPage from "./lib/NoPermissionPage.svelte";
  import PartsList from "./lib/PartsList.svelte";
  import TopBar from "./lib/TopBar.svelte";

  import { permissionLevelStore } from "./stores/auth";
</script>

{#if $permissionLevelStore === "loading"}
  Loading...
{:else if $permissionLevelStore === "logged-out"}
  <LoginPage />
{:else if $permissionLevelStore === 0}
  <NoPermissionPage />
{:else}
  <TopBar />
  <FloatingControls />
  <main>
    <PartsList />
  </main>
{/if}

<style>
  main {
    padding-top: 5.9375rem;
  }
</style>