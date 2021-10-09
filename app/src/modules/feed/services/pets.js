import { request } from '@/api/api'

export const getPetsByUser = async () => {

    try {
        const { data } = await request('get', 'pets')
        return data;
    } catch (error) {
        return false;
    }

}

export const createEgg = async () => {

    try {
        const { data } = await request('post', 'pets/create')
        return data;
    } catch (error) {
        return false;
    }

}

export const getPet = async (id) => {

    try {
        const { data } = await request('get', 'pets/' + id)
        return data;
    } catch (error) {
        return false;
    }

}
