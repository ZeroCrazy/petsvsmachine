

export const currentState = ( state ) => {
    return state.auth
}

export const username = ( state ) => {
    return state.user || ''
}

export const metamaskAddress = ( state ) => {
    return state.metamaskAddress || ''
}



