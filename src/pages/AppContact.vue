<script>
import axios from 'axios';
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        
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
                        <input type="text" class="form-control" id="name" name="name">
                    </div>
                    <div class="mb-3">
                        <label for="surname" class="form-label">Cognome</label>
                        <input type="text" class="form-control" id="surname" name="surname">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Numero di telefono</label>
                        <input type="text" class="form-control" id="phone" name="phone">
                    </div>
                    <div class="mb-3">
                        <label for="mail" class="form-label">Email</label>
                        <input type="mail" class="form-control" id="mail" name="mail" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="mex" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="mex" rows="4"></textarea>
                    </div>
                    <div class="btn btn-sm btn-dark mb-3">Send</div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="">
</style>