import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART_USER,
    GET_USER_CART_ITEMS,
    REMOVE_USER_CART_ITEM,
    ON_USER_SUCCESS_BUY,
} from '../_actions/types';
 

export default function(state={},action){
    switch(action.type){
        case REGISTER_USER:
            return {...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload }
        case AUTH_USER:
            return {...state, userData: action.payload }
        case LOGOUT_USER:
            return {...state }
        case ADD_TO_CART_USER:
            return {...state, userData : {
                ...state.userData, 
                    cart: action.payload
            } 
        }

        case GET_USER_CART_ITEMS:
            return {...state, cartDetail: action.payload}
        case REMOVE_USER_CART_ITEM:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }
             }

        case ON_USER_SUCCESS_BUY: 
             return {
                 ...state,
                 userdata: {
                     ...state.userData,
                     cart: action.payload.cart
                 },
                 cartDetail: action.payload.cartDetail
             }
        default:
            return state;
    }
}