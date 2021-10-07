import { request } from '@/api/api'

export const getEggsByUser = async () => {

    try {
        const { data } = await request('get', 'egg')
        return data;
    } catch (error) {
        return false;
    }

}

export const createEgg = async () => {

    try {
        const { data } = await request('post', 'egg/create')
        return data;
    } catch (error) {
        return false;
    }

}

export const openEgg = async (id) => {

    try {
        const { data } = await request('post', 'egg/open/' + id)
        return data;
    } catch (error) {
        return false;
    }

}
