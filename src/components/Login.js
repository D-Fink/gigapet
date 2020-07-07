import React, { useState } from "react";
import { history } from '../index';
import {connect} from 'react-redux';
import {userLogin} from '../actions/index'
import useForm from '../hooks/useForm'
import validation from '../hooks/validation'
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {

    const [values, setValues] = useState({username: "", password: ""});
    // const {handleChange, handleSubmit, values, errors} = useForm(submit, validation)

    const handleChange = e => {
        let value = e.target.value;
        setValues({
            ...values,
            [e.target.name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("users/login", values)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data)
            history.push('/')
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username:</label>
                <input
                id="username"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange} />

                <label htmlFor="password">Password:</label>
                <input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange} />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default connect(null, {userLogin})(Login);