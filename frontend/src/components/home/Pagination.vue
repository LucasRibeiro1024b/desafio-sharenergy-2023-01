<script setup>
import { defineProps, computed, defineEmits } from 'vue';

const emit = defineEmits(['change-page'])

const props = defineProps({
    offset: {
        type: [String, Number],
        default: 0
    },
    total: {
        type: [String, Number],
        required: true
    },
    limit: {
        type: [String, Number],
        default: 10
    },
})


// const current = computed(() => {
//     return  props.offset ? props.offset + 1 : 1
// })

const pages = computed(() => {
    const qy = Math.ceil(props.total / props.limit);

    if (qy <= 1) return [1];


    return Array.from(Array(qy).keys(), (i) => i + 1);

})

function changePage(offset) {

    emit('change-page', offset)
}


</script>



<template lang="">
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="(page, index) in pages" 
        :key="index" 
        class="page-item" 
        :class="{active: page === offset}"
        @click="changePage(index + 1)"
        >
        <a href="#" class="page-link">{{page}}</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>
