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

    const caressPet = async (id) => {
        const resp = await store.dispatch('feed/caressPet', id)
        return resp
    }

    const selectPet = async ( isShop, id ) => {
            const resp = await store.dispatch('feed/petFarm', {isShop, id})
            return resp;
    };


    return {
        getFarmByUser,
        feedPet,
        putHouse,
        caressPet,
        selectPet,
        farm: computed(() => store.getters['feed/farm']),
    }
}

export default useFarm