<script lang="ts">
    import type { Part } from "src/types/Part";
    import Icon from "./reusable/Icon.svelte";
    import IconButton from "./reusable/IconButton.svelte";

    import { getApp } from "firebase/app";
    import { getDatabase, set, update, ref } from "firebase/database";
    import { fade } from "svelte/transition";
    import Dialog from "./reusable/Dialog.svelte";
    import EditPartDialog from "./EditPartDialog.svelte";

    const db = getDatabase(getApp())

    export let part: Part;

    let editDialogOpen = false;

    function toggleSevereDamage() {
        set(ref(db, `parts/${part.id}/severeDamage`), !part.severeDamage);
    }

    function markReplaced() {
        update(ref(db, `parts/${part.id}`), {"severeDamage": false, "matchCount": 0});
    }
</script>

<div 
    class="part"
    style:background-color="hsl({part.severeDamage || part.matchCount > part.maxMatches ? 0 : -120*part.matchCount/part.maxMatches + 120}, 70%, 70%)"
>
    <div class="image" />
    <div class="details">
        <div class="left">
            <div class="text">
                <h3 class="title">{part.name}</h3>
                <ul class="data">
                    <li>{part.matchCount}/{part.maxMatches} Matches</li>
                </ul>
            </div>
            <div class="controls">
                <IconButton on:click={() => editDialogOpen = true}>
                    <Icon name="edit" size={1.5} />
                </IconButton>
                <IconButton on:click={toggleSevereDamage}>
                    <Icon name="heart_broken" size={1.5} style={part.severeDamage ? "filled" : "outlined"} />
                </IconButton>
                <IconButton on:click={markReplaced}>
                    <Icon name="published_with_changes" size={1.5} />
                </IconButton>
            </div>
        </div>
        <ul class="warnings">
            {#if part.severeDamage}
                <li class="warning">Severe Damage</li>
            {/if}
            {#if part.matchCount > part.maxMatches}
                <li class="warning">Beyond Expected Lifespan</li>
            {/if}
        </ul>
    </div>
</div>

<Dialog bind:open={editDialogOpen} >
    <EditPartDialog part={part} close={() => editDialogOpen = false} />
</Dialog>

<style>
    .part {
        display: flex;
        align-items: center;

        height: 9.625rem;
        width: 700px;

        /* background-color: #eee; */
        border-radius: 15px;

        transition: background-color 0.3s;
    }

    @media screen and (max-width: 720px) {
        .part {
            width: calc(100vw - 1rem);
        }
    }

    .controls {
        margin-top: 2rem;
    }

    .image {
        background-image: url('/src/assets/image-missing.png');
        background-size: cover;

        height: calc(100% - 20px);
        aspect-ratio: 1 / 1;
        margin: 10px;

        border-radius: 5px;
    }
    
    .title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 36px;
    }

    .details {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100%;

        padding: 0.78125rem 0 0.78125rem 0;
    }

    .warnings {
        width: max-content;
        padding: 1.5rem;
        margin: 0;

        list-style: none;
    }

    .warning {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }

    .warning::before {
        content: 'warning';
        font-family: 'Material Icons';
        line-height: 1;
        padding: 0.4rem;
        font-size: 1.3em;
    }

    .data {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .data li {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;

        display: flex;
        align-items: center;
        gap: 0.125rem;
    }
</style>