import { getPetsByUser, getShopProducts, getResourcesUser, getAllLands } from '../services'

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

export const getLands = async ({ commit }) => {

    const lands = await getAllLands();
    if (!lands) return { ok: false }
    commit('setLands', lands);
    return { ok: true }

}