<script>
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";
import axios from 'axios';
export default {
    components:{
        ProjectCard
    },
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(page_number){
            axios.get(store.endpoint, {
                params:{
                page: page_number
                }
            }).then(response => {
                
                store.projects = response.data.results.data
                this.currentPage = response.data.results.current_page
                this.lastPage = response.data.results.last_page
            })
        }
    }
}
</script>
<template lang="">
    <div class="container my-4">
        <div class="row row-gap-4">
          <div class="col-12 p-2">
            <h1>All Projects</h1>
          </div>
          <ProjectCard v-for="(project, index) in store.projects" :key="index" :project="project"></ProjectCard>
        </div>
    </div>
      <!-- switch pages -->
    <div class="container mb-3">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-center align-items-center gap-2">
              <button class="btn btn-sm btn-light border" :class="currentPage == 1 ? 'disabled' : ''" @click="getProjects(currentPage - 1)">
                <i class="fas fa-arrow-left"></i>
              </button>
              <button class="btn btn-sm btn-light border" :class="currentPage == lastPage ? 'disabled' : ''" @click="getProjects(currentPage + 1)">
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
</template>
<style lang="">
    
</style>