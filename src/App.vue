<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components:{
    AppHeader
  },
  /* data() {
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
  },*/
}
</script>
<template lang="">
  <AppHeader></AppHeader>
  <router-view></router-view>
  
</template>
<style lang="scss">
  @use './styles/generals.scss'
</style>