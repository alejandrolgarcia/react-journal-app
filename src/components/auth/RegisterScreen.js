import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui);

    const [ formValue, handleInputChange ] = useForm({
        name: 'Alejandro',
        email: 'alejandro@gmail.com',
        password: 'SuperDuperPassword2020$',
        password2: 'SuperDuperPassword2020$'
    });

    const { name, email, password, password2 } = formValue;

    const handleRegister = ( e ) => {
        e.preventDefault();
        
        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName( email, password, name) );
        }

    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required') );
            return false;
        }
        if( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') );
            return false;
        }
        if ( password !== password2 || password < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') );
            return false;
        }

        dispatch( removeError() );

        return true;

    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>

            {
                msgError &&
                (
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                )
            }


            <form onSubmit={ handleRegister }>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value= { name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value= { email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value= { password }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    value= { password2 }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>
            
            </form>

        </div>
    )
}
