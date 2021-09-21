
export const loginUser = ( state, { auth, idToken }) => {

    if ( idToken ) {
        localStorage.setItem( 'idToken', idToken )
        state.auth = auth
        state.idToken = idToken
    }

  
}


export const logout = (state) => {
    
    state.user = null
    state.idToken = null
    state.refreshToken = null
    state.status = 'not-authenticated'

    localStorage.removeItem('idToken')
    localStorage.removeItem('refreshToken')
}
