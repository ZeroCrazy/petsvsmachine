// import { computed } from 'vue'
// import { useStore } from 'vuex'
import { ref } from "vue";

import { getPet } from '../services'
import { useRoute } from "vue-router";


const useDetails = () => {

    // const store = useStore()

    const pet = ref({});

    const route = useRoute();

    const getDetails = async (id) => {
        return await getPet(id);
    }


    return {
        pet,
        route,
        getDetails,
    }
}

export default useDetails