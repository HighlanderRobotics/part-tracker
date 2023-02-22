<script lang="ts">
    import AccountButton from "./AccountButton.svelte";
    import SearchBar from "./SearchBar.svelte";
    import logo from "/src/assets/logo.png";
</script>

<nav>
    <!-- Logo -->
    <img id="logo" src={logo} alt="8033 logo">
    <!-- Search bar -->
    <SearchBar />

    <!-- Account button -->
    <AccountButton />
</nav>

<style>
    nav {
        position: fixed;
        z-index: 995;
        width: 100%;
        height: 5.9375rem;
        left: 0;
        top: 0;

        background: #FFFFFF;
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.05);

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem;
    }

    @media screen and (max-width: 720px) {
        #logo {
            display: none;
        }
    }

    #logo {
        width: 71px;
        height: 71px;
    }
</style>