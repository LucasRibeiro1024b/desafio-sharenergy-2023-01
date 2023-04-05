
<script setup>

const props = defineProps(['component','route'])


</script>



<template>
    <transition mode="out-in" :name="route.meta.transition" >
        <Component :is="component" />
    </transition>
</template>


<style scoped lang="css">
.fade-enter-active {
  transition: all .3s ease-out;
}

.fade-leave-active {
  transition: all .5s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  /* transform: translateX(30px); */
  opacity: 0;
}


</style>


