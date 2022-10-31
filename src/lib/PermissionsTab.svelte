<script>
    import { getDatabase, onValue, ref, set } from "firebase/database";


    let users = {};

    const db = getDatabase();

    onValue(ref(db, "users"), (snapshot) => {
        users = snapshot.val()
    })
</script>

<h2>Permissions</h2>

<div class="content">
    {#each Object.entries(users) as [id, user]}
        <div class="user">
            <div class="info">
                <div class="name">{user.name}</div>
                <div class="email">{user.email}</div>
            </div>
            <div class="authorization">
                <select
                    value={user.permissionLevel}
                    on:change={(e) => {
                        // @ts-ignore
                        const val = parseInt(e.target.value);
                        set(ref(db, `users/${id}/permissionLevel`), val)
                            .catch((error) => {
                                alert("Failed to update: " + error);
                            })
                    }}
                >
                    <option value={0}>None</option>
                    <option value={1}>Member</option>
                    <option value={2}>Admin</option>
                </select>
            </div>
        </div>
    {/each}
</div>

<style>
    .user {
        margin-top: 0.7rem;

        background-color: #f1f1f1;
        padding: 0.7rem;
        border-radius: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .name {
        font-weight: bold;
    }
</style>