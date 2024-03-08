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
            errors: {},
            sending: false
        }
    },
    methods: {
        sendForm(){
            this.sending = true
            const data = {
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                mail: this.mail,
                mex: this.mex,
            }
            axios.post(`${store.API_URL}/api/contacts`, data).then(response => {
                this.errors = {}
                if (response.data.success) {
                    this.name = ''
                    this.surname = ''
                    this.phone = ''
                    this.mail = ''
                    this.mex = ''
                    this.$router.push({
                        name: 'ThankYou'
                    })
                }else{
                    this.errors = response.data.errors
                }
                this.sending = false
            })
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
                        <input type="text" class="form-control" id="name" name="name" v-model="name" :class="errors.name ? 'is-invalid' : '' ">
                        <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">{{ error }}</p>
                    </div>
                    <div class="mb-3">
                        <label for="surname" class="form-label">Cognome</label>
                        <input type="text" class="form-control" id="surname" name="surname" v-model="surname" required :class="errors.surname ? 'is-invalid' : '' ">
                        <p v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="text-danger">{{ error }}</p>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Numero di telefono</label>
                        <input type="text" class="form-control" id="phone" name="phone" v-model="phone" required :class="errors.phone ? 'is-invalid' : '' ">
                        <p v-for="(error, index) in errors.phone" :key="`message-error-${index}`" class="text-danger">{{ error }}</p>
                    </div>
                    <div class="mb-3">
                        <label for="mail" class="form-label">Email</label>
                        <input type="mail" class="form-control" id="mail" name="mail" placeholder="name@example.com" v-model="mail" required :class="errors.mail ? 'is-invalid' : '' ">
                        <p v-for="(error, index) in errors.mail" :key="`message-error-${index}`" class="text-danger">{{ error }}</p>
                    </div>
                    <div class="mb-3">
                        <label for="mex" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="mex" name="mex" rows="4" v-model="mex" required :class="errors.phone ? 'is-invalid' : '' "></textarea>
                        <p v-for="(error, index) in errors.mex" :key="`message-error-${index}`" class="text-danger">{{ error }}</p>
                    </div>
                    <button type="submit" :disabled="sending" class="btn btn-sm btn-dark mb-3" >{{sending ? 'Invio in corso' : 'Send'}}</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="">
</style>