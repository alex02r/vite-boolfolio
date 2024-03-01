<script>
import projects from "./components/projects.vue";
import { store } from "./store";
import axios from 'axios';
export default {
  components:{
    projects
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects(){
      axios.get(store.endpoint).then(response => {
        store.projects = response.data.results
        console.log(response.data.results);
      })
    }
  },
}
</script>
<template lang="">
  <projects></projects>
</template>
<style lang="scss">
  @use './styles/generals.scss'
</style>