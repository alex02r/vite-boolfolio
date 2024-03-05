<script>
import axios from 'axios'
import { store } from "../store";
export default {
    data() {
        return {
            project: null
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
                }else{
                    this.$route.push({ name: 'NotFound'})
                }
            })
        }
    },
}
</script>
<template lang="">
    <div>
        <h1>SINGLE PROJECT</h1>
    </div>
</template>
<style lang="">
    
</style>