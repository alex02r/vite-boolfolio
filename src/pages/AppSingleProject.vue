<script>
import axios from 'axios'
import { store } from "../store";
export default {
    data() {
        return {
            project: null,
            loaded: false
        }
    },
    created() {
        this.getProject()
    },
    methods: {
        getProject(){
            axios.get(`${store.endpoint}/${this.$route.params.slug}`).then( response => {
                if (response.data.success) {
                    this.project = response.data.project
                    this.loaded = true
                }else{
                    this.$route.push({ name: 'NotFound'})
                }
            })
        },
        getImage(img){
            let path = 'https://blush.design/api/download?shareUri=FXLhsvs4ES&w=800&h=800&fm=png' //'https://cdn-icons-png.flaticon.com/512/3767/3767084.png'
            if (img != null) {
                path = `${store.API_URL}/storage/${img}`
            }
            return path;
        }
    },
}
</script>
<template lang="">
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-2 align-self-center" v-if="!loaded">
                <div class="loader"></div>
            </div>
            <div class="col-8" v-else>
                <div class="card shadow">
                    <img :src="getImage(project.img)" :alt="project.name" class="w-50 card-img-top align-self-center">
                    <div class="card-body">
                        <h4 class="card-title">{{project.name}}</h4>
                        <p class="card-text">
                            {{project.description}}
                        </p>
                        <div class="card-text">
                            <strong>Tecnologie: </strong>
                            <ul class="list-unstyled d-flex gap-2" v-if="project.technologies.length > 0">
                              <li v-for="(tech, index) in project.technologies" :key="index">
                                <span :class="`badge text-bg-${tech.class_color}`">{{tech.name}}</span>
                              </li>
                            </ul>
                            <span class="badge text-bg-secondary" v-else>nessuna</span>
                        </div>
                        <div class="card-text mb-3">
                            <strong>Tipo:</strong>
                            {{ project.type ? project.type.name : 'nessun tipo associato'}}
                        </div>
                        <p class="card-text">
                            <span class="text-secondary">Data inizio: {{ project.start_date }} <br> Data fine{{ project.end_date }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>
<style lang="">

</style>