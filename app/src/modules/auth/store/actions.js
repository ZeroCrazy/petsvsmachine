import { login, register } from '../services'

export const signInUser = async ({ commit }, user) => {


    const resp = await login(user);
    if (resp) {
        commit('loginUser', { auth: true, idToken: resp.token });
        return { ok: true }
    }
    else {
        return { ok: false }
    }

}

export const createUser = async ({ commit }, user) => {

    const resp = await register(user);
    if (resp.ok) {
        commit('loginUser', { auth: true, idToken: resp.data.token });
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