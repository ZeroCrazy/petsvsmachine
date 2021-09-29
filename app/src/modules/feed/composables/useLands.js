import { computed } from 'vue'
import { useStore } from 'vuex'

const useLands = () => {

    const store = useStore()

 
    const getLands = async () => {
        const resp = await store.dispatch('feed/getLands')
        return resp
    }

   

    return {
        getLands,
        lands: computed(() => store.getters['feed/lands']),
    }
}

export default useLands