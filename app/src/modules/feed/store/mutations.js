
export const setPets = (state, pets) => {
    state.pets = pets
}

export const setFarm = (state, farm) => {
    state.farm = farm
}

export const setShop = (state, shop) => {
    state.shop = shop
}

export const setResources = (state, resources) => {
    state.resources = resources
}

export const setLands = (state, lands) => {
    state.lands = lands
}


export const usageResource = (state, resource) => {
    state.resources[resource] = state.resources[resource] - 1;
}

export const petUpdate = (state, data) => {

    for (let i in state.farm) {
        if (data.id === state.farm[i].id) {
            if (data.action === 'food') {
                state.farm[i].bones++;
            } else if (data.action === 'house') {
                state.farm[i].haveHouse = true;
            } else if (data.action === 'cress') {
                state.farm[i].isAfraid = false;
            }
            break;
        }
    }

}



