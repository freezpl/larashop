import React, {Component} from 'react';
import {connect} from 'react-redux';

class MainForm extends Component {
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
        errors: {},
        isFormValid: true
    };

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        const name = e.target.name;
        const controls = { ...this.state.controls };
        let field = { ...controls[name] };
        field.value = e.target.value;
        field = this.handleErrors(field);
        field.touched = true;
        controls[name] = field;
        let isFormValid = this.handleFormIsValid(controls);
        this.setState(function() {
            return { controls, isFormValid };
        });
    };

    handleErrors = field => {
        field.errors = [];
        //required
        if (!!field.rules[rules.required]) {
            if (field.value.length == 0)
                field.errors.push("This field is required! ");
        }
        //email
        if (!!field.rules[rules.email]) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(field.value.toLowerCase()))
                field.errors.push("Wrong email address!");
        }
        //min
        if (!!field.rules[rules.min]) {
            const rule = field.rules[rules.min];
            if (field.value.length < rule) field.errors.push("Too short!");
        }
        return field;
    };

    handleFormIsValid(controls) {
        for (const [key, control] of Object.entries(controls)) {
            if (control.errors.length > 0 || !control.touched) return false;
        }
        return true;
    }

    render() {
        return (
               <>{this.props.children}</>
        );
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.login(this.state.controls.email.value, this.state.controls.password.value)
    }
}

function mapDispatchtoProps(dispatch){
    return {
        login: (email, password) => dispatch(AuthActionCreator.login(email, password))
    }
}

export default connect(null, mapDispatchtoProps)(MainForm);