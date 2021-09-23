import { login, loginMetamask, register } from '../services'

export const signInUser = async ({ commit }, { user, metamask = false }) => {
    let resp;
    if (metamask) {
        resp = await loginMetamask(metamask);
    } else {
        resp = await login(user);
    }
    if (resp) {
        commit('loginUser', { auth: true, idToken: resp.token, username: resp.username, metamaskAddress: resp.metamaskAddress });
        return { ok: true }
    }
    else {
        return { ok: false }
    }

}

export const autoLogin = async ({ commit }, { user }) => {
    commit('loginUser', { auth: true, idToken: user.idToken, username: user.username, metamaskAddress: user.metamask_address });
    return { ok: true }
}


export const createUser = async ({ commit }, user) => {

    const resp = await register(user);
    if (resp.ok) {
        commit('loginUser', { auth: true, idToken: resp.data.token, username: resp.data.username });
        return { ok: true }
    }
    else {
        return { ok: false, msg: resp.msg }
    }

}




// import authApi from '@/api/authApi'

// // export const myAction = async ({ commit }) => {


// // }






// export const checkAuthentication = async ({ commit }) => {

//     const idToken      = localStorage.getItem('idToken')
//     const refreshToken = localStorage.getItem('refreshToken')

//     if( !idToken ) {
//         commit('logout')
//         return { ok: false, message: 'No hay token' }
//     }

//     try {

//         const { data } = await authApi.post(':lookup', { idToken })
//         // console.log(data)
//         const { displayName, email } = data.users[0]

//         const user = {
//             name: displayName,
//             email
//         }

//         commit('loginUser', { user, idToken, refreshToken })

//         return { ok: true }

//     } catch (error) {
//         commit('logout')
//         return { ok: false, message: error.response.data.error.message }
//     }

// }