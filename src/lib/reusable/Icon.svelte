<script lang="ts">
    export let name;
    export let size = 1;
    export let color = "#000";

    export let style: 'filled' | 'outlined' = "filled";
</script>

<span
    class="material-icons material-icons-{style}"
    style:font-size={`${size}rem`}
    style:color={color}
>
    {name}
</span>

<style>
    span {
        user-select: none;
    }
</style>