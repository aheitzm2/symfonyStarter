<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app",
        created() {
        }
    }
</script>

<style>
    .container .navbar-item {
        cursor: pointer;
        text-decoration: underline;
    }
    h1 {
        color:blue;
    }
</style>