<script lang="ts">
    import type { Part } from "src/types/Part";

    import { getApp } from "firebase/app";
    import { getDatabase, ref, set, update } from "firebase/database";
    import Icon from "./reusable/Icon.svelte";

    const db = getDatabase(getApp())

    export let close: () => any;
    export let part: Part;

    let newPart = part;

    let errors = [];

    function savePart() {
        // Validate
        errors = [];

        if (newPart.name.length <= 0) errors = [...errors, "Part Name is required"];
        if (newPart.matchCount < 0 || newPart.matchCount === null) errors = [...errors, "Match count  must be a positive number"];
        if (newPart.maxMatches <= 0) errors = [...errors, "Maximum matches must be a number grater than 0"];

        if (errors.length > 0) return;

        console.log(newPart);

        // Update in database
        
        update(ref(db, `parts/${part.id}`), {
            "name": newPart.name,
            "matchCount": newPart.matchCount,
            "maxMatches": newPart.maxMatches,
        });

        close();
    }

    function deletePart() {
        set(ref(db, `parts/${part.id}`), null);

        close();
    }
</script>

<h1>Edit Part</h1>

<div class="field">
    <label for="part-name-input">Part Name</label><br />
    <input
        type="text"
        id="part-name-input"
        placeholder="My Part"
        bind:value={newPart.name}
    />
</div>
<div class="field">
    <label for="max-matches-input">Match Count</label><br />
    <input
        type="number"
        id="max-matches-input"
        placeholder="5"
        bind:value={newPart.matchCount}
    />
</div>
<div class="field">
    <label for="max-matches-input">Maximum Matches</label><br />
    <input
        type="number"
        id="max-matches-input"
        placeholder="10"
        bind:value={newPart.maxMatches}
    />
</div>

{#if errors.length > 0}
    <ul class="errors">
        {#each errors as err}
            <li>{err}</li>
        {/each}
    </ul>
{/if}

<div class="buttons">
    <div class="left">
        <button data-variant="destructive" on:click={deletePart}>Delete Part</button>
    </div>
    <div class="right">
        <button on:click={close}>Cancel</button>
        <button data-variant="primary" on:click={savePart}>Save</button>
    </div>
</div>

<style>
    .field input {
        width: 100%;
    }

    .field {
        margin-bottom: 0.5rem;
    }

    .buttons {
        margin-top: 1.5rem;

        display: flex;
    }

    .buttons .right {
        flex-grow: 1;
        text-align: right;
    }

    .errors {
        padding: 0;
        list-style: none;
    }
</style>