const randomNumber = (min, max) => {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const getRarity = () => {
    const random = Math.random();
    let rarity;
    if (random <= 0.05) rarity = 'mitic';
    else if (random <= 0.15) rarity = 'rare';
    else if (random <= 0.5) rarity = 'uncommon';
    else rarity = 'common';

    return rarity;
}

const getRole = () => {
    const randomRole = Math.random();
    let role;
    if (randomRole <= 0.25) role = 'assasin';
    else if (randomRole <= 0.5) role = 'tank-suport';
    else if (randomRole <= 0.75) role = 'marker';
    else role = 'fighter';

    return role;
}

const getGeneticStats = (rarity) => {

    if (rarity === 'mitic') {
        return getGenetic(200);
    } else if (rarity === 'rare') {
        return getGenetic(150);
    } else if (rarity === 'uncommon') {
        return getGenetic(100);
    } else if (rarity === 'common') {
        return getGenetic(50); 
    }

}

const getGenetic = (base) => {
    const hp = randomNumber(base, 255);
    const atk = randomNumber(base, 255);
    const def = randomNumber(base, 255);
    const spd = randomNumber(base, 255);
    return { hp, atk, def, spd };
}

const getBaseStats = (role) => {
    if (role === 'assasin') {
        const hp = getRangeStats('moderate');
        const atk = getRangeStats('hight');
        const def = getRangeStats('lower');
        const spd = getRangeStats('hight');
        return { hp, atk, def, spd };
    } else if (role === 'tank-suport') {
        const hp = getRangeStats('hight');
        const atk = getRangeStats('lower');
        const def = getRangeStats('hight');
        const spd = getRangeStats('lower');
        return { hp, atk, def, spd };
    } else if (role === 'marker') {
        const hp = getRangeStats('moderate');
        const atk = getRangeStats('hight');
        const def = getRangeStats('lower');
        const spd = getRangeStats('moderate');
        return { hp, atk, def, spd };
    } else if (role === 'fighter') {
        const hp = getRangeStats('moderate');
        const atk = getRangeStats('moderate');
        const def = getRangeStats('moderate');
        const spd = getRangeStats('moderate');
        return { hp, atk, def, spd };
    }
}

const getRangeStats = (tier) => {
    if (tier === 'lower') return randomNumber(20, 85);
    else if (tier === 'moderate') return randomNumber(85, 170);
    else if (tier === 'hight') return randomNumber(170, 255);
}

module.exports = {
    getRarity,
    getRole,
    getGeneticStats,
    getBaseStats
}