import { request } from '@/api/api'

export const getPetsByUser = async () => {

    try {
        const { data } = await request('get', 'pets/get')
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

export const getShopProducts = async () => {

    try {
        const { data } = await request('get', 'shop')
        return data;
    } catch (error) {
        return false;
    }

}

export const getResourcesUser = async () => {

    try {
        const { data } = await request('get', 'player/resources')
        return data;
    } catch (error) {
        return false;
    }

}

