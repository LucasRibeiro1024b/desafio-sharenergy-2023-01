<script setup>
import { onMounted, ref, reactive } from 'vue';
import Pagination from '../../components/home/Pagination.vue';

onMounted(() => {
    fetchUsers();
})
async function fetchUsers() {
    const response = await fetch(`https://randomuser.me/api/?nat=br&results=${pageSize.value}&page=${pageNumber.value}`);
    const data = await response.json();
    state.users = data.results;
    paginateUsers(pageNumber.value);
}


function paginateUsers(value) {
    pageNumber.value = value;
    const start = value === 1 ? 0 : pageNumber.value * limit.value - limit.value;
    const final = value === 1 ? limit.value : pageNumber.value * limit.value - 1
    state.usersPaginate = state.users.slice(start, final)
}

function pesquisar() {
    if (search.value === '') {
        paginateUsers(1);
        return;
    };
    let pesquisa = state.users.filter(item => {
        let name = `${item.name.first} ${item.name.last}`;
        let email = item.email

        return name.toLowerCase().includes(search.value.toLowerCase()) || email.includes(search.value.toLowerCase())
    })

    state.usersPaginate = pesquisa
}


const state = reactive({ users: [], usersPaginate: [] });

// qtde de usuarios que vai vir
const pageSize = ref(100);
// qual pagina que vai startar
const pageNumber = ref(1);

const limit = ref(10)

const search = ref('')

</script>



<template >
    <div class="container-fluid d-flex flex-column align-items-center">
        <h1 class="text-center mt-3">Usuarios</h1>
        <input type="search" class="ms-auto" style="padding: 10px 20px;" placeholder="Pesquise usuarios"
            @keyup="pesquisar()" v-model="search">
    </div>



    <div class="mt-5 rounded-pill shadow-sm mb-5 d-flex flex-column align-items-center">
        <Pagination :total="pageSize" :limit="limit" :offset="pageNumber" @change-page="paginateUsers" />

        <table class="container-fluid">
            <thead class="bg-body-secondary border-secondary-subtle border-top-0 border-start-0 border-end-0">
                <tr>
                    <th class="p-3 fs-4 fw-medium  text-start">ID</th>
                    <th class="p-3 fs-4 fw-medium  text-start">Foto</th>
                    <th class="p-3 fs-4 fw-medium  text-start">Nome</th>
                    <th class="p-3 fs-4 fw-medium  text-start">Email</th>
                    <th class="p-3 fs-4 fw-medium  text-start">Username</th>
                    <th class="p-3 fs-4 fw-medium  text-start">Idade</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white" v-for="(user, index) in state.usersPaginate" :key="index">
                    <td class="p-3 fs-4 text-black">{{ user.id.value }}</td>
                    <td class="p-3 fs-4 text-black">
                        <img :src="user.picture.medium" alt="" class="rounded-pill">
                    </td>
                    <td class="p-3 fs-4 text-black">{{ `${user.name.first} ${user.name.last}` }}</td>
                    <td class="p-3 fs-4 text-black">{{ user.email }}</td>
                    <td class="p-3 fs-4 text-black">{{ user.name.title }}</td>
                    <td class="p-3 fs-4 text-black">{{ user.dob.age }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
