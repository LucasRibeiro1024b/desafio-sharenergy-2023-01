<script setup>
import Wrapper from './views/wrapper/index.vue';




</script>

<template>
  <div class="box">
    <router-view v-slot="{ Component, route }">
      <Wrapper :component="Component" :route="route"></Wrapper>
    </router-view>
  </div>
</template>

<style >
#app,
body,
html,
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


.box {
  height: 100vh;
  width: 100%;
  background-color: #121212;

}
</style>
