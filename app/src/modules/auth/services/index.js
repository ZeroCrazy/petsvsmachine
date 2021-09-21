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

export const register = async ({ email, password }) => {

    try {

        const { data } = await request('post', 'auth/register', { email, password })

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