import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useFeed = () => {

    const store = useStore()

    const resourcesUser = ref({

        coins: {
            id:1,
            icon: false,
            text: 'CE',
            value: 0,
        },
        house: {
            id:2,
            icon: "fal fa-home-alt",
            text: false,
            value: 0,
        },
        food: {
            id:3,
            icon: "fal fa-bone",
            text: false,
            value: 0,
        },
        cress: {
            id:4,
            icon: "fal fa-hand-paper",
            text: false,
            value: 0,
        }
    })

    const resources = computed(() => store.getters['feed/resources']);

    // const getPetsByUser = async () => {
    //     const resp = await store.dispatch('feed/getPetsUser')
    //     return resp
    // }


    const getResourcesUser = async () => {
        const resp = await store.dispatch('feed/getResources')
        if (resp.ok) {
            resourcesUser.value.coins.value = resources.value.coins
            resourcesUser.value.house.value = resources.value.house
            resourcesUser.value.food.value = resources.value.food
            resourcesUser.value.cress.value = resources.value.cress
        }
        return resp
    }



    return {
        // getPetsByUser,
        getResourcesUser,
        resourcesUser,
        resources,
        // pets: computed(() => store.getters['feed/pets']),
    }
}

export default useFeed