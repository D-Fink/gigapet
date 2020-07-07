import React, {useState} from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm';
import validation from '../hooks/validation';

const Register = props => {

    const {handleChange, handleSubmit, values, errors} = useForm(submit, validation);

    function submit(){
        console.log(values)
        axios
        .post('https://dfink-gigapet.herokuapp.com/api/users/register', values)
        .then( res => {
            console.log(res)
            props.history.push('/login')
        })
        .catch(error => {
            console.log(error)
        })
   
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type="text"
                placeholder="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                className={`${errors.username && "inputError"}`}
                />

                {errors.username && <p className="error">{errors.username}</p>}

                <input type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className={`${errors.password && "inputError"}`} />

                {errors.password && <p className="error">{errors.password}</p>}

                <input type="email"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={`${errors.email && "inputError"}`} />

                {errors.email && <p className="error">{errors.email}</p>}

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register

