import { request } from '@/api/api'

export const getAllLands = async () => {

    try {
        const { data } = await request('get', 'lands')
        return data;
    } catch (error) {
        return false;
    }

}

export const getUserLands = async () => {

    try {
        const { data } = await request('get', 'lands/user')
        return data;
    } catch (error) {
        return false;
    }

}

export const floorLandActive = async () => {

    try {
        const { data } = await request('get', 'lands/floor')
        return data;
    } catch (error) {
        return false;
    }

}


