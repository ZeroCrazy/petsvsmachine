import { getFarmByUser, caressPetUser, feedPetUser, housePetUser } from '../services/farm'
import { getAllLands } from '../services/lands'
import { getPetsByUser } from '../services/pets'
import { getResourcesUser } from '../services/player'
import { buyCaress, buyFood, buyHouse, getShopProducts } from '../services/shop'


export const getPetsUser = async ({ commit }) => {

    const pets = await getPetsByUser();
    if (!pets) return { ok: false }
    commit('setPets', pets);
    return { ok: true }

}

export const getFarmUser = async ({ commit }) => {

    const farm = await getFarmByUser();
    if (!farm) return { ok: false }
    commit('setFarm', farm);
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

export const feedPet = async ({ commit }, id) => {

    const response = await feedPetUser(id);
    if (!response) return { ok: false }
    commit('usageResource', 'food');
    commit('petUpdate', { action: 'food', id });
    return { ok: true }
}

export const housePet = async ({ commit }, id) => {

    const response = await housePetUser(id);
    if (!response) return { ok: false }
    commit('usageResource', 'house');
    commit('petUpdate', { action: 'house', id });
    return { ok: true }
}

export const caressPet = async ({ commit }, id) => {

    const response = await caressPetUser(id);
    if (!response) return { ok: false }
    commit('usageResource', 'caress');
    commit('petUpdate', { action: 'caress', id });
    return { ok: true }
}

export const buyResource = async ({ commit }, { resource, cost, usage }) => {

    if (resource === 'house') {
        const response = await buyHouse();
        if (!response) return { ok: false }
    } else if (resource === 'food') {
        const response = await buyFood();
        if (!response) return { ok: false }
    } else if (resource === 'caress') {
        const response = await buyCaress();
        if (!response) return { ok: false }

    }
    commit('updateResource', { resource: 'coins', quantity: -cost });
    commit('updateResource', { resource, quantity: usage });
    return { ok: true }
}

export const getLands = async ({ commit }) => {

    const lands = await getAllLands();
    if (!lands) return { ok: false }
    commit('setLands', lands);
    return { ok: true }

}