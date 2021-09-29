import { request } from '@/api/api'




export const getResourcesUser = async () => {

    try {
        const { data } = await request('get', 'player/resources')
        return data;
    } catch (error) {
        return false;
    }

}




