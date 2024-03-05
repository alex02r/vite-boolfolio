<script>
import { store } from '../store';
export default {
  props:{
    project: Object
  },
  data() {
    return {
      store
    }
  },
  methods: {
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
  <div class="col-3">
    <div class="my-card">
      <img :src="getImage(project.img)" :alt="project.name">
      <h5>{{ project.name}}</h5>
      <p class="text-secondary">{{ project.description }}</p>
      <div class="info-card">
        <span class="title">Tecnologie: </span>
        <ul class="list-unstyled d-flex gap-2" v-if="project.technologies.length > 0">
          <li v-for="(tech, index) in project.technologies" :key="index">
            <span :class="`badge text-bg-${tech.class_color}`">{{tech.name}}</span>
          </li>
        </ul>
        <span class="badge text-bg-secondary" v-else>nessuna</span>
      </div>

      <div class="info-card mb-3">
        <span class="title">Tipo:</span>
        {{ project.type ? project.type.name : 'nessun tipo associato'}}
      </div>

      <div class="my-card-date">
        <div>{{ project.start_date }}</div><div>{{ project.end_date }}</div>
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
    .info-card{
      .title{
        font-weight: 600;
      }
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