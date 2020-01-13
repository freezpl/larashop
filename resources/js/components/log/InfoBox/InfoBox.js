import React from 'react';
import classnames from 'classnames'
import PropTypes from 'prop-types';

const InfoBox = ({props}) => {

    return (
        <div className="form-group row">
            <label htmlFor={field} className="col-sm-2">{label}</label>
            <input
                type={type}
                id={field}
                name={field}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={classnames('form-control', 'col-sm-9', { 'is-invalid': !!errors.length })} />
            {!!errors.length &&
                <div className="invalid-feedback">{errors}</div>
            }
        </div>
    );
}

Input.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func
}

Input.defaultProps = {
    type: 'text'
}

export default Input;