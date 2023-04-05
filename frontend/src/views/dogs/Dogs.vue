<script setup>
// https://dog.ceo/api/breeds/image/random Fetch!

import { reactive } from 'vue';

function getDog() {
    fetchDog();
}

const state = reactive({ dogsArray: [] })

async function fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    if (!response.ok) {
        state.dogsArray.push({ src: 'https://media.istockphoto.com/id/486150666/pt/foto/erro-404.jpg?s=1024x1024&w=is&k=20&c=nen9NOZsXhA5o2jPxInjHzx2waFqtW3Eo2iZN8OFBkI=' })
    } else {
        state.dogsArray.push({ src: data.message })
    }
}


</script>

<template lang="">
 <div class="container-fluid d-flex flex-column align-items-center">
        <h1 class="text-center mt-3 fw-bold">Dogs</h1>
        <div class="input-cat d-flex flex-column gap-2 mt-5">
            <h2 class="fs-5 fw-normal">Clique para buscar um doguinho</h2>
            <button class="btn btn-primary" style="padding: 10px 20px;" @click="getDog()">Buscar</button>
        </div>


        <div class="dogs mt-5">
            <div class="dog" v-for="(dog, index) in state.dogsArray" :key="index">
                <img :src="dog.src"  alt="dog" class="img-dog">
            </div>
        </div>
    </div>
</template>
<style scoped>
.dogs {
    width: 100%;
    display: grid;
    justify-content: center;
    /* grid-template-columns: 1fr 1fr 1fr; */
    /* grid-template-columns: repeat(auto-fit, 350px); */
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.img-dog {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
</style>