import { reactive } from "vue";

export const store = reactive({
    endpoint: 'http://127.0.0.1:8000/api/projects',
    API_URL: 'http://127.0.0.1:8000',
    projects: []
})