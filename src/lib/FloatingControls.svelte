<script>
    import Icon from "./reusable/Icon.svelte";

    import { getApp } from 'firebase/app';
    import { getDatabase, increment, update, ref } from 'firebase/database';

    // @ts-ignore
    import { parts } from '/src/stores/data-sync';
    import Dialog from "./reusable/Dialog.svelte";
    import NewPartDialog from "./NewPartDialog.svelte";

    let partsValue; // Object with every Part
    
    parts.subscribe((value) => {
        partsValue = value;
    });
    
    const db = getDatabase(getApp());

    function incrementMatch() {
        let updates = {}

        for (const part in partsValue) {
            updates[`${part}/matchCount`] = increment(1);
        }

        update(ref(db, "parts/"), updates);
    }

    let newPartDialogOpen = false;
</script>

<div class="floating-controls">
    <button class="control" on:click={() => newPartDialogOpen = true}>
        <Icon name="add" size={1.5} />
        <span>Add Part</span>
    </button>
    <button class="control" on:click={incrementMatch}>
        <Icon name="emoji_events" size={1.5} />
        <span>Increment Match</span>
    </button>
</div>

<Dialog bind:open={newPartDialogOpen}>
    <NewPartDialog close={() => newPartDialogOpen = false} />
</Dialog>

<style>
    .floating-controls {
        position: fixed;
        bottom: 0;
        left: 0;
    }

    .control {
        display: flex;
        align-items: center;
        background-color: #f2f2f2;
        border: 1px solid #bbb;
        border-radius: 5em;
        padding: 0.3rem 0.6rem;
        cursor: pointer;
        margin: 0.5rem;
    }

    .control span {
        margin-left: 0.2em;
    }
</style>