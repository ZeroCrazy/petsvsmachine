export const propsBoxPet = {
    empty: {
        type: Boolean,
        required: true,
    },
    id: {
        type: Number,
        required: false,
    },
    land_id: {
        type: [Number, Boolean],
        required: false,
    },
    land_rarity: {
        type: [String, Boolean],
        required: false,
    },
    pet_id: {
        type: [Number, Boolean],
        required: false,
    },
    pet_rarity: {
        type: [String, Boolean],
        required: false,
    },
    pet_image: {
        type: [String, Boolean],
        required: false,
    },
    pet_ce: {
        type: [Number, Boolean],
        required: false,
    },
    pet_time: {
        type: [Number, Boolean],
        required: false,
    },
    startFarm_at: {
        type: [String, Boolean],
        required: false,
    },
    completedFarm_at: {
        type: [String, Boolean],
        required: false,
    },
    minsToComplete: {
        type: [Number, Boolean],
        required: false,
    },
    extraTime: {
        type: [Number, Boolean],
        required: false,
    },
    haveHouse: {
        type: Boolean,
        required: false,
    },
    bones: {
        type: [Number, Boolean],
        required: false,
    },
    isAfraid: {
        type: Boolean,
        required: false,
    }

}