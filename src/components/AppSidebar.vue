<template>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
            <router-link tag="li" to="/in_theaters">
                <a>正在热映</a>
            </router-link>
            <router-link tag="li" to="/coming_soon">
                <a>即将上映</a>
            </router-link>
            <router-link tag="li" to="/top250">
                <a>TOP250</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
