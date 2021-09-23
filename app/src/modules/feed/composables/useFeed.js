import { computed } from 'vue'
import { useStore } from 'vuex'

const useFeed = () => {

    const store = useStore()

    const getPetsByUser = async () => {
        const resp = await store.dispatch('feed/getPetsUser')
        return resp
    }

  

    return {
        getPetsByUser,
        pets: computed(() => store.getters['feed/pets']),
    }
}

export default useFeed