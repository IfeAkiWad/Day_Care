import uuid from "uuid";


const toddlerReducer = (state = {toddlers: []}, action) => {
    switch (action.type) {
        case 'LOADING_TODDLERS':
            return {
            ...state, 
            toddlers: [...state.toddlers], 
            loading: true
        }
        case 'ADD_TODDLER':
            const thisToddler = {
                id: uuid(),
                text: action.payload.toddler,
              };
            return {
                // ...state,
                // toddlers: action.toddlers,
                toddlers: state.toddlers.concat(thisToddler),
                loading: false
            }
            // return {...state, toddlers: [...state.toddlers, action.toddler]} 
        case "REMOVE_TODDLER":
            let deleteToddlers = state.toddlers.filter(thisToddler => thisToddler.id !== action.id)
            return {...state, toddlers: deleteToddlers}
        default:
            return state;
    }
}

export default toddlerReducer