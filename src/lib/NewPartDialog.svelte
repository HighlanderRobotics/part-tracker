<script lang="ts">
    export let close: () => void;

    import { getApp } from 'firebase/app';
    import { getDatabase, ref, push } from 'firebase/database';
    import type { Part } from 'src/types/Part';

    const db = getDatabase(getApp());

    let partName = "";
    let maxMatches = null;

    let errors = [];

    function create() {
        // Validation
        errors = []
        if (!(partName.length > 0)) errors = [...errors, "Part name is required"];
        if (!(maxMatches > 0)) errors = [...errors, "Maximum matches must be a number more than 0"];

        if (errors.length > 0) return;

        // Everything is valid, add to database
        const part: Part = {
            "name": partName,
            "severeDamage": false,
            "historicalLifespan": {"originalEstimate": maxMatches},
            "matchCount": 0,
        }

        push(ref(db, "parts/"), part)

        close()
    }
</script>

<h1>New Part</h1>

<div class="field">
    <label for="part-name-input">Part Name</label><br />
    <input
        type="text"
        id="part-name-input"
        placeholder="My Part"
        bind:value={partName}
    />
</div>
<div class="field">
    <label for="max-matches-input">Maximum Matches</label><br />
    <input
        type="number"
        id="max-matches-input"
        placeholder="10"
        bind:value={maxMatches}
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
    <button on:click={close}>Cancel</button>
    <button data-variant="primary" on:click={create}>Create</button>
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
        text-align: right;
    }

    .errors {
        padding: 0;
        list-style: none;
    }
</style>