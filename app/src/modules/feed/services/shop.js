import { request } from '@/api/api'

export const getShopProducts = async () => {

    try {
        const { data } = await request('get', 'shop')
        return data;
    } catch (error) {
        return false;
    }

}


export const buyPet = async (quantity) => {
    try {
        const { data } = await request('post', `shop/buy/pet`, {quantity})
        return data;
    } catch (error) {
        return false;
    }

}
export const buyHouse = async (quantity) => {
    try {
        const { data } = await request('post', `shop/buy/house`, {quantity})
        return data;
    } catch (error) {
        return false;
    }

}
export const buyFood = async (quantity) => {
    try {
        const { data } = await request('post', `shop/buy/food`, {quantity})
        return data;
    } catch (error) {
        return false;
    }

}
export const buyCaress = async (quantity) => {
    try {
        const { data } = await request('post', `shop/buy/caress`, {quantity})
        return data;
    } catch (error) {
        return false;
    }

}

export const buyEgg = async (quantity) => {
    try {
        const { data } = await request('post', `shop/buy/egg`, {quantity})
        return data;
    } catch (error) {
        return false;
    }

}