import React, { Component } from 'react';
import './login.css';
import { AuthActionCreator } from '../../../../store/actions/AuthActionCreator'
import AdminLoginForm from '../../../ui/forms/AdminLoginForm/AdminLoginForm';
import MainForm from '../../../ui/forms/MainForm/MainForm';

class Login extends Component {



    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="logo d-flex justify-content-center">
                        <img src="img/logo/logo_main.png"/>
                    </div>
                    <div className="login-form">
                        <MainForm><AdminLoginForm name="hello!"/></MainForm>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;