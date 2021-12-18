const adminReducer = (state = {admins: []}, action) => {
    switch (action.type) {
        case 'LOADING_ADMINS':
            return {
            ...state, 
            admins: [...state.admins, action.payload], 
            loading: true
            }
        case 'LOGIN_ADMINS':
            console.log('ADDING ADMIN')
            return {
                ...state,
                admins: action.payload,
                loading: false
            }
        case "LOGOUT_ADMIN":
            let logOutAdmins = state.admins.filter(admin => admin.id === action.payload.id)
            return {...state, admins: logOutAdmins}
        default:
            return state;
    }
}

export default adminReducer