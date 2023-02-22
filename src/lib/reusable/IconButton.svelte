<script lang="ts">
    export let tooltip: string = null;
</script>

<button on:click title={tooltip}>
    <slot />
</button>

<style>
    button {
        margin: 0;
        padding: 0;

        background: transparent;
        border: none;
        cursor: pointer;
    }
</style>