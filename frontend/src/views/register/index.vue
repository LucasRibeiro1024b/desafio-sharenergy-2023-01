<script setup>

import { reactive } from 'vue';


const user = reactive({
    email: 'guizin',
    password: '123'
})

const error = reactive({
    text: ''
})

// const login = () => {

//     console.log(validation())
// }

const validation = () => {
    if (user.email === '' || user.password === '') {
        error.text = 'Email ou Senha não podem ser vazios'
        return
    };

    if (user.email.length < 3) {
        error.text = 'Email deve conter mais de 3 caracteres'
        return
    };

    if (user.password < 8) {
        error.text = 'Senha deve conter mais de 8 caracteres'
        return
    }

}

</script>


<template>
    <div class="form-box">
        <div class="input-group">
            <label class="text-3">Email: </label>
            <input type="text" placeholder="Digite seu Email: " class="input-control">
        </div>
        <div class="input-group">
            <label class="text-3">Senha: </label>
            <input type="password" placeholder="Digite sua Senha: " class="input-control">
        </div>
        <div class="input-group">
            <label class="text-3">Confirme a Senha: </label>
            <input type="password" placeholder="Confirme sua Senha: " class="input-control">
        </div>
        <button class="btn-entrar">Cadastrar</button>
        <p class="register"><router-link to="/" class="link">Voltar</router-link></p>
    </div>
</template>


<style scoped>
.register {
    align-self: center;
    font-size: 1.2rem;
    color: #fff;
}

.link {
    color: #7456f1;
    text-decoration: none;
    font-weight: bold;
    opacity: 0.8;
}

.link:hover {
    color: #7456f1;
    text-decoration: none;
    opacity: 1;
}

.input-group {

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 15px 0;

}

.text-3 {
    font-weight: bold;
    font-size: 1.4rem;
}

.btn-entrar {
    border-radius: 5px;
    width: 100%;
    padding: 15px 20px;
    outline: 0;
    border: 0;
    background-color: #7456f1;
    color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    margin: 20px 0;
    font-weight: bold;
    text-transform: uppercase;
}


.input-control {
    font-size: 1.1rem;
    padding: 20px;

    outline: 0;
    /* outline-color: #7456f1; */
    border-radius: 5px;
    border: 2px solid transparent;
    /* width: 100%; */
    background-color: #121212;
    color: #d7d7d7;
}

.input-control:focus {
    transition: .2s;
    border-color: #7456f1;
}


.form-box {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    display: flex;
    flex-direction: column;

    padding: 30px;

    border-radius: 5px;
    width: 550px;
    max-width: 90%;

    color: #fff;
    /* background-color: #222; */
    background-color: #202020;
}
</style>