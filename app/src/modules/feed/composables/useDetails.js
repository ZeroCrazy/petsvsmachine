import { ref } from "vue";

import { getFarmDetails } from '../services/farm'
import { useRoute } from "vue-router";


const useDetails = () => {

    // const store = useStore()

    const pet = ref({});

    const route = useRoute();

    const getDetails = async (id) => {
        return await getFarmDetails(id);
    }


    return {
        pet,
        route,
        getDetails,
    }
}

export default useDetails