import { computed } from 'vue'
import { useStore } from 'vuex'

import { identity } from '../services'



const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {
        const resp = await store.dispatch('auth/createUser', user)
        return resp
    }

    const loginUser = async (user) => {
        const resp = await store.dispatch('auth/signInUser', {user})
        return resp
    }

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = () => {
        store.commit('auth/logout')
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

    const autoLogin = async () => {

        const idToken = localStorage.getItem("idToken");
        if (!idToken) return { ok: false };

        const user = await identity();

        const resp = await store.dispatch('auth/autoLogin', { user: { idToken, ...user } })

        return resp


    }

    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logout,
        createUserMetamask,
        autoLogin,

        authStatus: computed(() => store.getters['auth/currentState']),
        username: computed(() => store.getters['auth/username']),
        metamaskAddress: computed(() => store.getters['auth/metamaskAddress']),
    }
}

export default useAuth