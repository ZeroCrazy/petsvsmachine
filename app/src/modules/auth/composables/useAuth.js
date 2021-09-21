import { computed } from 'vue'
import { useStore } from 'vuex'


const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {
        const resp = await store.dispatch('auth/createUser', user)
        return resp
    }

    const loginUser = async (user) => {
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = () => {
        store.commit('auth/logout')
        store.commit('journal/clearEntries')
    }

    const createUserMetamask = async (data) => {
        console.log("data:", data);
        console.log(data.metaMaskAddress);
        if (data.type === 'MAINNET') {

            const resp = await store.dispatch('auth/signInUser', { user: false, metamask: data.metaMaskAddress });
            console.log(resp);
            return resp;
        }
        // switch (data.type) {
        //     case 'MAINNET':
        //         const resp = await store.dispatch('auth/signInUser', false, data.metaMaskAddress);
        //         return resp;
        //     case 'NO_INSTALL_METAMASK':
        //         break;
        //     case 'NO_LOGIN':
        //         break;
        //     case 'NETWORK_ERROR':
        //         break;
        //     case 'USER_DENIED_ACCOUNT_AUTHORIZATION':
        //         break;

        // }
        return data;
    }

    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logout,
        createUserMetamask,

        authStatus: computed(() => store.getters['auth/currentState']),
        username: computed(() => store.getters['auth/username'])
    }
}

export default useAuth