<script lang="ts">
    import { fade, fly } from "svelte/transition";


    export let open: boolean;
    export let allowClose = true;
</script>

{#if (open)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="background"
        on:click={() => open = !allowClose}

        transition:fade={{ duration: 200 }}
    />
    <div class="content" transition:fly={{ y: 200, duration: 200 }}>
        <slot />
    </div>
{/if}

<style>

    .background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: rgba(0, 0, 0, 0.564);
        z-index: 999;
    }

    .content {
        width: 50vw;
        background-color: #fff;
        padding: 1rem;
        border-radius: 0.4rem;
        box-shadow: 0px 0.25rem 0.45rem rgba(0, 0, 0, 0.911);
        z-index: 1000;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>