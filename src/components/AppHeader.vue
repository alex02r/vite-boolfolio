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
    <header>
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-3">
                    <h1>Portfolio</h1>
                </div>
                <div class="col-6">
                    <ul class="list-unstyled d-flex gap-3">
                        <li v-for="(item, index) in store.list_menu" :key="index">
                            <router-link :to="{ name: item.name }" class="nav-link">{{ item.label}}</router-link>    
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="">
    
</style>