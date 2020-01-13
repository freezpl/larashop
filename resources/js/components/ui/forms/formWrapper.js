import React, {Component} from 'react';
import {requiredRule, emailRule, minRule, isBusyRule} from '../../../global/rules';
import {connect} from 'react-redux';

const formWrapper = (Component)  => {

    const handleErrors = field => {
        field.errors = [];
        //required
        if (!!field.rules[requiredRule]) {
            if (field.value.length == 0)
            field.errors.push("This field is required! ");
        }
        //email
        if (!!field.rules[emailRule]) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(field.value.toLowerCase()))
            field.errors.push("Wrong email address!");
        }
        //min
        if (!!field.rules[minRule]) {
            const rule = field.rules[minRule];
            if (field.value.length < rule) field.errors.push("Too short!");
        }
        return field;
    };

    const handleFormIsValid = (controls) => {
        for (const [key, control] of Object.entries(controls)) {
            if (control.errors.length > 0 || !control.touched) return false;
        }
        return true;
    }

    return props => {
        return (
            <Component {...props} handleErrors={handleErrors} handleFormIsValid={handleFormIsValid} />
        );
    }
}

export default formWrapper;