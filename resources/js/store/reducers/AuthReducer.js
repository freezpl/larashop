import {ADMIN_LOGIN} from '../actions/actionTypes'
import history from './../../global/history'

const initState = {
    isLogged: false,
};

export default function AuthReducer(state = initState, action){
    switch (action.type) {
        case ADMIN_LOGIN:
            localStorage.setItem('token', data.data.access_token);
            history.push('/tasks');
            console.log("Ok")
            return {...state, isLogged: action.value};
    
        default:
            return state;
    }
}