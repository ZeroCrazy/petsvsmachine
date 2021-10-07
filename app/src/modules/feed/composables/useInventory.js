import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue';

import { getPetsByUser } from '../services/pets'
import { getEggsByUser, createEgg, openEgg } from '../services/eggs'
import { getUserLands } from '../services/lands'

const useInventory = () => {

    const store = useStore()

    const getShop = async () => {
        const resp = await store.dispatch('feed/getShop');
        return resp;
    }

    const buyResource = async (resource, cost, usage) => {
        const resp = await store.dispatch('feed/buyResource', { resource, cost, usage });
        return resp;
    }

    const pets = ref([]);

    const getPets = async () => {
        const pets = await getPetsByUser();
        return pets;
    }

    const eggs = ref([]);

    const getEggs = async () => {
        const eggs = await getEggsByUser();
        return eggs;
    }

    const lands = ref([]);

    const getLandsUser = async () => {
        const lands = await getUserLands();
        return lands
    }

    const generateEgg = async () => {
        const egg = await createEgg();
        return egg
    }

    const open = async (id) => {
        const egg = await openEgg(id);
        return egg
    }

    return {
        getShop,
        buyResource,
        pets,
        getPets,
        lands,
        getLandsUser,
        eggs,
        getEggs,
        generateEgg,
        open,
        shop: computed(() => store.getters['feed/shop']),
    }
}

export default useInventory
