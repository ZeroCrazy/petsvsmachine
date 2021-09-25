import { computed } from 'vue'
import { useStore } from 'vuex'

const useFeed = () => {

    const store = useStore()


    const getShop = async () => {
        const resp = await store.dispatch('feed/getShop')
        return resp
    }


    return {
        getShop,
        shop: computed(() => store.getters['feed/shop']),
    }
}

export default useFeed