<script>
import { store } from '../store';
export default {
  data() {
    return {
      store
    }
  },
  methods: {
    getImage(img){
      let path = 'https://cdn-icons-png.flaticon.com/512/3767/3767084.png'
      if (img != null) {
        path = `${store.API_URL}/storage/${img}`
      }
      return path;
    }
  },
}
</script>
<template lang="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 bg-white p-2">
        <h1>All Projects</h1>
      </div>
    </div>
  </div>
  <div class="container my-4">
    <div class="row row-gap-4">
      <div class="col-4" v-for="(project, index) in store.projects" :key="index">
        <div class="my-card">
          <img :src="getImage(project.img)" :alt="project.name">
          <h5>{{ project.name}}</h5>
          <p>{{ project.description }}</p>
          <div class="my-card-date">
            <div>{{ project.start_date }}</div><div>{{ project.end_date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @use '../styles/generals.scss';
  .my-card{
    height: 100%;
    padding: 35px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    p{
      font-size: 0.85rem;
    }
    .my-card-date{
      display: flex;
      gap: 10px;
      div{
        font-size: 0.75rem;
        color: grey;
      }
    }
  }
</style>