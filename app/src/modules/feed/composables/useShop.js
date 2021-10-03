import { computed } from 'vue'
import { useStore } from 'vuex'

const useShop = () => {

    const store = useStore()

    const getShop = async () => {
        const resp = await store.dispatch('feed/getShop');
        return resp;
    }

    const buyResource = async (resource, cost, usage, quantity) => {

        const resp = await store.dispatch('feed/buyResource', { resource, cost, usage, quantity });
        return resp;
    }



    return {
        getShop,
        buyResource,
        shop: computed(() => store.getters['feed/shop']),
    }
}

export default useShop