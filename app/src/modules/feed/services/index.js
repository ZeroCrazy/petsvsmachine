import { request } from '@/api/api'

export const getPetsByUser = async () => {

    try {
        const { data } = await request('get', 'pets')
        return data;
    } catch (error) {
        return false;
    }

}

export const getPet = async (id) => {

    try {
        const { data } = await request('get', `pets/${id}`)
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

export const getAllLands = async () => {

    try {
        const { data } = await request('get', 'lands')
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

export const cressPetUser = async (id) => {
    try {
        const { data } = await request('post', `farm/cress/${id}`)
        return data;
    } catch (error) {
        return false;
    }

}

