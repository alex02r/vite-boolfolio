<script>
export default {
    
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="bg-contact my-5" id="contact">
                    <h1>CONTATTAMI</h1>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="h-100 d-flex justify-content-center align-items-center">
                    <h2>Just a coffe</h2>
                    <h5>Compila il form per contattarmi</h5>
                    <span>Tempo medio di risposta entro 24 ore</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <form @submit.prevent=”sendForm()” method="post">
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
<style lang="scss" scoped>
    .bg-contact{
        width: 100%;
        height: 250px;
        background-image: url('https://res.cloudinary.com/stills-website/image/private/t_2xl-w,f_auto/v1/files/images/p-995a3e95-fdf1-411b-a4e1-cef7f023e459.jpg');
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>