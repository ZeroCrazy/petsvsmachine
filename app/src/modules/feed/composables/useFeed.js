import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useFeed = () => {

    const store = useStore()

    const resourcesUser = ref({

        coins: {
            id:1,
            icon: false,
            name: 'production',
            text: 'CE',
            value: computed(() => store.getters['feed/resources'].coins),
        },
        house: {
            id:2,
            icon: "fal fa-home-alt",
            name: 'house',
            text: false,
            value: computed(() => store.getters['feed/resources'].house),
        },
        food: {
            id:3,
            icon: "fal fa-bone",
            name: 'food',
            text: false,
            value: computed(() => store.getters['feed/resources'].food),
        },
        cress: {
            id:4,
            icon: "fal fa-hand-paper",
            name: 'caress',
            text: false,
            value: computed(() => store.getters['feed/resources'].cress),
        }
    })

    const getResourcesUser = async () => {
        const resp = await store.dispatch('feed/getResources')
        return resp
    }



    return {
        // getPetsByUser,
        getResourcesUser,
        resourcesUser,
        resources: computed(() => store.getters['feed/resources']),
        // pets: computed(() => store.getters['feed/pets']),
    }
}

export default useFeed