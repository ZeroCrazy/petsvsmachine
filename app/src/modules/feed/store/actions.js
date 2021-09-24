import { getPetsByUser, getShopProducts, getResourcesUser } from '../services'

export const getPetsUser = async ({ commit }) => {

    const pets = await getPetsByUser();
    if (!pets) return { ok: false }
    commit('setPets', pets);
    return { ok: true }

}

export const getShop = async ({ commit }) => {

    const pets = await getShopProducts();
    if (!pets) return { ok: false }
    commit('setShop', pets);
    return { ok: true }

}

export const getResources = async ({ commit }) => {

    const resources = await getResourcesUser();
    if (!resources) return { ok: false }
    commit('setResources', resources);
    return { ok: true }

}