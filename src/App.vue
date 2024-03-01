<script>
import projects from "./components/projects.vue";
import { store } from "./store";
export default {
  components:{
    projects
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getProjects(){
      axios.get(store.endpoint).then(response => {
        store.projects = response.data.results
      })
    }
  },
}
</script>
<template lang="">

</template>
<style lang="scss">
  @use './styles/generals.scss'
</style>