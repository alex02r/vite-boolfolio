<script>
import AppHeader from "./components/AppHeader.vue";
import { store } from "./store";
import axios from 'axios';
export default {
  components:{
    AppHeader
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
        console.log(response.data.results);
      })
    }
  },
}
</script>
<template lang="">
  <AppHeader></AppHeader>
  <router-view></router-view>
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
<style lang="scss">
  @use './styles/generals.scss'
</style>