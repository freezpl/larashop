import React, { Component } from 'react';
import './login.css';
import AdminLoginForm from '../../../ui/forms/AdminLoginForm/AdminLoginForm';

class Login extends Component {

    render() {
        return (
                <div>
                    <div className="logo d-flex justify-content-center">
                        <img src="img/logo/logo_main.png"/>
                    </div>
                    <div className="login-form">
                        <AdminLoginForm />
                    </div>
                </div>
        );
    }
}

export default Login;