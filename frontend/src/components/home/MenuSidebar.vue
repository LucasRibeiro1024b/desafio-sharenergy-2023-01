<script setup>
import Icon from '../global/IconComponent.vue';

</script>


<template >
    <div class="menu-sidebar">
        <h1 class="menu-title fs-2 fw-bold">DASHBOARD</h1>
        <hr class="border-light">

        <div class="d-flex align-items-center flex-column">
            <router-link to="/home" class="fs-5 text-white me-auto d-flex gap-3 align-items-center" style="text-decoration:none;"><Icon name="Users"/> FAKE USERS</router-link>
        </div>
        <div class="d-flex align-items-center flex-column mt-4">
            <router-link to="/cats" class="fs-5 text-white me-auto d-flex gap-3 align-items-center" style="text-decoration:none;"><Icon name="Cat"/>HTTP CATS</router-link>
        </div>
        <div class="d-flex align-items-center flex-column mt-4">
            <router-link to="/dogs" class="fs-5 text-white me-auto d-flex gap-3 align-items-center" style="text-decoration:none;"><Icon name="Dog"/>DOGS API</router-link>
        </div>
    </div>
</template>


<style scoped>
.menu-sidebar {
    padding: 10px;
    width: 300px;
    overflow-y: auto;
    background-color: #111;
}

.menu-title {
    padding: 10px;
    color: #0359d0;
}
</style>