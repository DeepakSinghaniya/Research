import React from 'react';
import classes from './Input.scss';
import bootstrap from '../../scss/bootstrap.scss';


const input = (props) => {
    let inputElement = null;
    const inputClasses = [bootstrap['form-control']];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(bootstrap['is-invalid']);
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input autoComplete={props.keyid}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input autoComplete={props.keyid}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
	console.log('test');
    return (
        <div className={[classes.customInput, bootstrap['form-group']].join(' ')}>
            <label className={['col-sm-2', bootstrap['col-form-label']].join(' ')}>{props.elementConfig.placeholder}</label>
            {inputElement}
        </div>
    );

};

export default input;