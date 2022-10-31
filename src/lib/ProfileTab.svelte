<script lang="ts">
    // @ts-ignore
    import { userStore } from "/src/stores/auth.ts"
</script>

<h2>Profile</h2>

<div class="content">
    <div class="property">
        <div class="title">
            Name
        </div>
        <div class="value">
            {$userStore.displayName}
        </div>
    </div>
    <div class="property">
        <div class="title">
            Email
        </div>
        <div class="value">
            {$userStore.email}
        </div>
    </div>
</div>

<style>
    .property {
        margin-top: 0.7rem;

        background-color: #f1f1f1;
        padding: 0.7rem;
        border-radius: 0.5rem;
    }

    .title {
        font-weight: bold;
    }
</style>