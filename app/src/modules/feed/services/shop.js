import { request } from '@/api/api'

export const getShopProducts = async () => {

    try {
        const { data } = await request('get', 'shop')
        return data;
    } catch (error) {
        return false;
    }

}


export const buyHouse = async () => {
    try {
        const { data } = await request('post', `shop/buy/house`)
        return data;
    } catch (error) {
        return false;
    }

}
export const buyFood = async () => {
    try {
        const { data } = await request('post', `shop/buy/food`)
        return data;
    } catch (error) {
        return false;
    }

}
export const buyCaress = async () => {
    try {
        const { data } = await request('post', `shop/buy/caress`)
        return data;
    } catch (error) {
        return false;
    }

}