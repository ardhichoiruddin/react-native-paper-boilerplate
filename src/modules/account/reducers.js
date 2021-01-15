import { SAVE_TOKEN, DELETE_TOKEN } from './types'

const initialState = {
    token: null
}

const tokenReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_TOKEN:
            return{
                ...state,
                token: action.token
            }
        case DELETE_TOKEN:
            return{
                ...state,
                token: null
            }
        default:
            return state
    }
}

export default tokenReducer