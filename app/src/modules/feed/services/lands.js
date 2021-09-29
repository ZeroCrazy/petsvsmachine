import { request } from '@/api/api'

export const getAllLands = async () => {

    try {
        const { data } = await request('get', 'lands')
        return data;
    } catch (error) {
        return false;
    }

}

