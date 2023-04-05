<script setup>
import { ref, reactive } from 'vue';

const input = ref('');


const state = reactive({ catsArray: [] })

function getCat() {
    if (input.value === '') return;

    const catValue = input.value.trim();


    fetchApi(catValue);

    input.value = '';
};

async function fetchApi(value) {
    console.log(value);
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://http.cat/${value}`);
    if (!response.ok) {
        const obj = {
            src: 'https://http.cat/404'
        }

        state.catsArray.push(obj);
    } else {
        const imageBlob = await response.blob();
        const imageUrl = URL.createObjectURL(imageBlob);

        const obj = {
            src: imageUrl
        }

        state.catsArray.push(obj)
    }
}


</script>

<template >
    <div class="container-fluid d-flex flex-column align-items-center">
        <h1 class="text-center mt-3">Cats</h1>
        <div class="input-cat d-flex gap-2">
            <input type="text" class="form-control" style="padding: 10px 20px;" placeholder="Cadastre um gatinho"
                v-model="input" @keyup.enter="getCat">
            <button class="btn btn-primary" style="padding: 10px 20px;" @click="getCat" >Cadastrar</button>
        </div>


        <div class="cats mt-5">
            <div class="cat" v-for="(cat, index) in state.catsArray" :key="index">
                <img :src="cat.src"  alt="cat" class="img-cat">
            </div>
        </div>
    </div>
</template>

<style scoped>

    .cats {
        width: 100%;
        display: grid;
        justify-content: center;
        /* grid-template-columns: 1fr 1fr 1fr; */
        /* grid-template-columns: repeat(auto-fit, 350px); */
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 20px;
    }

    .img-cat {
        max-width: 100%;
        /* height: 200px; */
        /* height: inherit;a */
        object-fit: cover;
    }


</style>