  
import {ADMIN_LOGIN} from './actionTypes'
import axios from '../../global/axios'

export class AuthActionCreator {
    static loginAdmin(email, password){
        return (dispatch) =>{
            axios.post('auth/administrator_login', {email, password}).then((data)=>{
                const token = data.data.token;
                dispatch({type:ADMIN_LOGIN, value: token});
            }, (error)=>{
                console.log("Bad loghin or password");
            }).catch((error)=>{
                
            });
        }          
    }
}