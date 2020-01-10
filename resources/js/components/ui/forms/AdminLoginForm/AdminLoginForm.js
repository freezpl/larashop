import React, { Component } from "react";
import {connect} from 'react-redux';
import Input from "../../controls/Input/Input";
//import { rules } from "../rules";
import {AuthActionCreator} from '../../../../store/actions/AuthActionCreator';
import formWrapper from '../formWrapper';

class AdminLoginForm extends Component {
    state = {
        controls: {
            email: {
                type: "text",
                field: "email",
                label: "Email",
                value: "a@gmail.com",
                errors: [],
                rules: { required: true, email: true },
                touched: false
            },
            password: {
                type: "password",
                field: "password",
                label: "Password",
                value: "12345",
                errors: [],
                rules: { required: true, min: 3 },
                touched: false
            }
        },
        isFormValid: true
    };

    handleChange = e => {
        const name = e.target.name;
        const controls = { ...this.state.controls };
        let field = { ...controls[name] };
        field.value = e.target.value;
        
        field = this.props.handleErrors(field);
        field.touched = true;
        controls[name] = field;
        let isFormValid = this.props.handleFormIsValid(controls);
        this.setState(function() {
            return { controls:controls, isFormValid };
        });
    };

    render() {
        const email = this.state.controls.email;
        const pass = this.state.controls.password;
        return (
            <form name="form" onSubmit={this.submitHandler} >
                <Input
                    type= {email.type}
                    label= {email.label}
                    field= {email.field}
                    value={email.value}
                    errors={email.errors}
                    onChange={this.handleChange}
                />

                <Input
                    type= {pass.type}
                    label= {pass.label}
                    field= {pass.field}
                    value={pass.value}
                    errors={pass.errors}
                    onChange={this.handleChange}
                />
                
                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        disabled={!this.state.isFormValid}>
                        Enter
                    </button>
                </div>
            </form>
        );
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.loginAdmin(this.state.controls.email.value, this.state.controls.password.value)
    }
}

function mapDispatchtoProps(dispatch){
    return {
        loginAdmin:(email, password) => dispatch(AuthActionCreator.loginAdmin(email, password))
    }
}

export default connect(null, mapDispatchtoProps)(formWrapper(AdminLoginForm));