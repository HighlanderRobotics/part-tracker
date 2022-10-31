<script lang="ts">
    import Icon from "./reusable/Icon.svelte";

    export let options: { label: string, value: string, icon: string }[];
    export let value: string;
</script>

<div class="options">
    {#each options as option}
        <button
            on:click={() => value = option.value}
            class={option.value === value ? "active" : ""}
        >
            <Icon name={option.icon} size={1.5} />
            <span>{option.label}</span>
        </button>
    {/each}
</div>

<style>
    .options {
        display: flex;
        flex-direction: column;
    }

    button {
        text-align: left;
        border-radius: 0;
        background-color: #ffffff;

        padding: 1rem;

        transition: background-color 0.2s;

        display: flex;
        align-items: center;
    }

    button span {
        margin: 0.5em;
    }

    button:hover {
        background-color: #f1f1f1;
    }

    button.active {
        background-color: #ddd;
    }
</style>