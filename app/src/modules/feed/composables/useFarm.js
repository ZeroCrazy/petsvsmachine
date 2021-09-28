import { computed } from 'vue'
import { useStore } from 'vuex'

const useFarm = () => {

    const store = useStore()

    const getFarmByUser = async () => {
        const resp = await store.dispatch('feed/getFarmUser')
        return resp
    }


    const feedPet = async (id) => {
        const resp = await store.dispatch('feed/feedPet', id)
        return resp

    }

    const putHouse = async (id) => {
        const resp = await store.dispatch('feed/housePet', id)
        return resp
    }

    const cressPet = async (id) => {
        const resp = await store.dispatch('feed/cressPet', id)
        return resp
    }


    return {
        getFarmByUser,
        feedPet,
        putHouse,
        cressPet,
        farm: computed(() => store.getters['feed/farm']),
    }
}

export default useFarm