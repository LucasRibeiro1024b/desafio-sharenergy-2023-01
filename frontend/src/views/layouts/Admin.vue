<script setup>
import MenuSidebar from '../../components/home/MenuSidebar.vue'

import Navegation from '../../components/home/Navegation.vue'
</script>

<template>
    <div class="wrapper">
        <MenuSidebar />
        <div class="main">
            <Navegation />
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<style >

.content {
    height: 100%;
    padding: 10px 15px;
    background-color: #f3f3f3;
}

.main {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.wrapper {
    min-height: 100vh;

    display: flex;
}
</style>