
export const loginUser = (state, { auth, idToken, username, metamaskAddress }) => {
    if (idToken) {
        localStorage.setItem('idToken', idToken)
        state.auth = auth
        state.idToken = idToken
        state.username = username
        state.metamaskAddress = metamaskAddress
    }
}

export const logout = (state) => {

    state.auth = false
    state.user = null
    state.idToken = null
    state.metamaskAddress = null

    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')
}
