import { request } from '@/api/api'


export const login = async ({ email, password }) => {

    try {
        const { data } = await request('post', 'auth/login', { email, password })
        return data;
    } catch (error) {
        return false;
        // if (error.response.status == 401) {
        //     // User not found
        //     return { error: { user: true } }
        // } else if (error.response.status == 402)
        //     // Incorrect password
        //     return { error: { password: true } 
        // }
    }

}

export const loginMetamask = async (metaMaskAddress) => {

    try {
        const { data } = await request('post', 'auth/login/metamask', { metaMaskAddress })

        return data;

    } catch (error) {
        return false;
        // if (error.response.status == 401) {
        //     // User not found
        //     return { error: { user: true } }
        // } else if (error.response.status == 402)
        //     // Incorrect password
        //     return { error: { password: true } 
        // }
    }

}

export const register = async ({ username, email, password }) => {

    try {

        const { data } = await request('post', 'auth/register', { username, email, password })
        return {
            ok: true,
            data
        };

    } catch (error) {
        return {
            ok: false,
            msg: error.response.data.errors
        };
    }

}

export const identity = async () => {

    try {
        const { data } = await request('get', 'auth/identity')
        return data;
    } catch (error) {
        return false;
       
    }

}

