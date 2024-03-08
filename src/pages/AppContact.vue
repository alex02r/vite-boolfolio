<script>
import axios from 'axios';
import { store } from "../store";
export default {
    data() {
        return {
            store,
            name: '',
            surname: '',
            phone: '',
            mail: '',
            mex: '',
        }
    },
    methods: {
        sendForm(){
            const data = [
                name = this.name,
                surname = this.surname,
                phone = this.phone,
                mail = this.mail,
                mex = this.mex,
            ]
            axios.post(`${store.API_URL}/api/contacts`)
        }
    },
}
</script>
<template lang="">
    <div class="container my-5">
        <div class="row justify-content-center row-gap-3">
            <div class="col-12 text-center">
                <h1>CONTATTACI</h1>
            </div>
            <div class="col-8 bg-white p-3 rounded">
                <form @submit.prevent="sendForm()" method="post">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" v-model="name" required name="name">
                    </div>
                    <div class="mb-3">
                        <label for="surname" class="form-label">Cognome</label>
                        <input type="text" class="form-control" id="surname" v-model="surname" required name="surname">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Numero di telefono</label>
                        <input type="text" class="form-control" id="phone" v-model="phone" required name="phone">
                    </div>
                    <div class="mb-3">
                        <label for="mail" class="form-label">Email</label>
                        <input type="mail" class="form-control" id="mail" v-model="mail" required name="mail" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="mex" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="mex" rows="4" v-model="mex" required></textarea>
                    </div>
                    <div class="btn btn-sm btn-dark mb-3">Send</div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="">
</style>