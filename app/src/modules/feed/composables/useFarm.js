import { computed } from 'vue'
import { useStore } from 'vuex'

const useFarm = () => {

    const store = useStore()

    const getFarmByUser = async () => {
        const resp = await store.dispatch('feed/getFarmUser')
        return resp
    }


    return {
        getFarmByUser,
        farm: computed(() => store.getters['feed/farm']),
    }
}

export default useFarm