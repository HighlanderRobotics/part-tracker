<script lang="ts">
    // @ts-ignore
    import sortParts from "/src/logic/sortParts";
    import PartsListItem from "./PartsListItem.svelte";

    // @ts-ignore (the file does exist, not sure why it says it doesn't)
    import { parts } from "/src/stores/data-sync";
    import { flip } from "svelte/animate";
    import { fade, fly, scale, slide } from "svelte/transition";

    // @ts-ignore
    import { searchTextStore } from "/src/stores/searchText";
    import type { Part } from "src/types/Part";
    let searchText;

    searchTextStore.subscribe((value) => {
        searchText = value;
    })

    let partsValue; // Object with every Part
    
    parts.subscribe((value) => {
        partsValue = value;
    });

    $: sortedParts = (Object.entries(partsValue) as [string, Part][])
        .map(([key, value]) => ({...value, "id": key})) // Get everything into a nice array
        .filter((part: Part) => part.name.toLowerCase().includes(searchText.toLowerCase())) // Only include parts with searched text
        .sort(sortParts); // Sort by priority
</script>

<div class="list">
    {#each sortedParts as part (part.id)}
        <div
            animate:flip="{{duration:part => 30 * Math.sqrt(part)}}"
            transition:fade="{{duration: 100}}"
        >
            <PartsListItem part={part} />
        </div>
    {/each}
</div>

<style>
    .list {
        display: flex;
        align-items: center;
        flex-direction: column;

        gap: 1.25rem;

        padding-top: 1.625rem;
    }
</style>