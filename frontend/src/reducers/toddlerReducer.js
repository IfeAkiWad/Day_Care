// const toddlerReducer = (state = {toddlers: []}, action) => {
//     switch (action.type) {
//         case 'LOADING_TODDLERS':
//             return {
//             toddlers: action.payload
//         }
//         case 'ADD_TODDLERS':
//             return {...state,
//                 toddlers: action.payload}
//         case 'REMOVE_TODDLER':
//             let deleteToddlers = state.toddlers.filter(toddler => {
//                 return toddler.id !== action.payload.id
//             })
            
//             return {...state, toddlers: deleteToddlers}
//             default:
//                 return state          
//     }
// }

const toddlerReducer = (state = {toddlers: []}, action) => {
    switch (action.type) {
        case 'LOADING_TODDLERS':
            return {
            ...state, 
            toddlers: [...state.toddlers, action.payload], 
            loading: true
        }
        case 'ADD_TODDLERS':
            return {
                ...state,
                toddlers: action.payload,
                loading: false
            }
            // return {...state, toddlers: [...state.toddlers, action.toddler]} 
        case "REMOVE_TODDLER":
            let deleteToddlers = state.toddlers.filter(toddler => toddler.id === action.payload.id)
            return {...state, toddlers: deleteToddlers}
        default:
            return state;
    }
}

export default toddlerReducer