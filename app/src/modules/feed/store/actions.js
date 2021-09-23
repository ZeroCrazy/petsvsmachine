import { getPetsByUser } from '../services'

export const getPetsUser = async ({ commit }) => {

    const pets = await getPetsByUser();
    if (!pets) return { ok: false }
    commit('getPets', pets);
    return { ok: true }

}