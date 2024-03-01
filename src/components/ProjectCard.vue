<script>
import { store } from '../store';
export default {
  data() {
    return {
      store
    }
  },
}
</script>
<template lang="">
  <div class="container my-4">
    <div class="row">
      <div class="col-12">
        <h1>All Projects</h1>
      </div>
      <div class="col-3" v-for="(project, index) in store.projects" :key="index">
        prova
      </div>
    </div>
  </div>
</template>
<style lang="">
  
</style>