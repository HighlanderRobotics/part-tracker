<script lang="ts">
    import { getAuth } from "firebase/auth";
    import PermissionsTab from "./PermissionsTab.svelte";
    import ProfileTab from "./ProfileTab.svelte";
    import Sidebar from "./Sidebar.svelte";

    // @ts-ignore
    import { permissionLevelStore } from "/src/stores/auth.ts";

    let selectedTab = "profile";
    
    let availableTabs = [];

    permissionLevelStore.subscribe((value) => {
        let newAvailableTabs = [];

        newAvailableTabs.push({ label: "Profile", icon: "account_circle", value: "profile" });

        if (value >= 2) {
            newAvailableTabs.push({ label: "Permissions", icon: "manage_accounts", value: "permissions" });
        }

        availableTabs = newAvailableTabs
    })

    export let close: () => any;
</script>
<div class="grid">
    <div class="sidebar">
        <Sidebar
            options={availableTabs}
            bind:value={selectedTab}
         />
    </div>
    <div class="content">
        {#if selectedTab === "profile"}
            <ProfileTab />
        {:else if selectedTab === "permissions"}
            <PermissionsTab />
        {/if}
    </div>
    <div class="bottom-controls">
        <button on:click={close}>Close</button>
        <button on:click={() => { getAuth().signOut() }}>Log out</button>
    </div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 15rem 3fr;
    }

    .content, .bottom-controls {
        padding: 1rem;
    }

    .sidebar, .content {
        height: 50vh;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .sidebar {
        border-right: 1px solid #ddd;
    }

    .bottom-controls {
        grid-column: span 2;
        border-top: 1px solid #ddd;
        background-color: #f5f5f5;
    }
</style>