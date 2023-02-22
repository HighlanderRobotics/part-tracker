<script>
    import Icon from "./reusable/Icon.svelte";
    // @ts-ignore - The file definetely exists.
    import { searchTextStore } from "/src/stores/searchText";
</script>
<div class="search-bar">
    <Icon name="search" size={1.875} color="#777" />
    <input type="text" placeholder="Search for parts" bind:value={$searchTextStore} />
</div>

<style>
    .search-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px;
        gap: 10px;

        position: fixed;
        left: calc(50% - var(--width)/2);

        --width: 50vw;
        width: var(--width);
        height: 60px;

        background: #dbdbdb;
        border-radius: 10px;
    }

    @media screen and (max-width: 720px) {
        .search-bar {
            position: static;
            flex: 1;
            margin-right: 0.6rem;
        }
    }

    input {
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;

        font-family: 'Heebo';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 24px;
    }

    input::placeholder {
        color: #777;
    }
</style>