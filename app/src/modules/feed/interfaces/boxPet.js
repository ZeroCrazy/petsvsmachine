export const propsBoxPet = {
    id: {
        type: Number,
        required: true,
    },
    land_id: {
        type: [Number, Boolean],
        required: false,
    },
    land_rarity: {
        type: [String, Boolean],
        required: true,
    },
    pet_id: {
        type: [Number, Boolean],
        required: true,
    },
    pet_rarity: {
        type: [String, Boolean],
        required: true,
    },
    pet_image: {
        type: [String, Boolean],
        required: true,
    },
    pet_ce: {
        type: [Number, Boolean],
        required: true,
    },
    pet_time: {
        type: [Number, Boolean],
        required: true,
    },
    startFarm_at: {
        type: [String, Boolean],
        required: true,
    },
    completedFarm_at: {
        type: [String, Boolean],
        required: true,
    },
    minsToComplete: {
        type: [Number, Boolean],
        required: true,
    },
    extraTime: {
        type: [Number, Boolean],
        required: true,
    },
    haveHouse: {
        type: Boolean,
        required: true,
    },
    bones: {
        type: [Number, Boolean],
        required: true,
    },
    isAfraid: {
        type: Boolean,
        required: true,
    }

}