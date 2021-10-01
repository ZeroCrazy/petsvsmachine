import { request } from '@/api/api'

export const getFarmDetails = async (id) => {

    try {
        const { data } = await request('get', `farm/${id}`)
        return data;
    } catch (error) {
        return false;
    }

}

export const getFarmByUser = async () => {

    try {
        const { data } = await request('get', 'farm')
        return data;
    } catch (error) {
        return false;
    }

}


export const housePetUser = async (id) => {

    try {
        const { data } = await request('post', `farm/house/${id}`)
        return data;
    } catch (error) {
        return false;
    }

}

export const feedPetUser = async (id) => {

    try {
        const { data } = await request('post', `farm/food/${id}`)
        return data;
    } catch (error) {
        return false;
    }

}

export const caressPetUser = async (id) => {
    try {
        const { data } = await request('post', `farm/caress/${id}`)
        return data;
    } catch (error) {
        return false;
    }

}

export const putFarm = async (pet_id, isShop) => {

    try {
        const { data } = await request('post', 'farm/start', { pet_id, isShop })
        return data;
    } catch (error) {
        return false;
    }

}

