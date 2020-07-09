import React, {useState} from 'react';
import axios from 'axios';

const Register = props => {

    const [userCreate, setUserCreate] = useState({username: "", password: "", email: ""})

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userCreate)
        axios
        .post('https://dfink-gigapet.herokuapp.com/api/users/register', userCreate)
        .then( res => {
            console.log(res)
            props.history.push("/login")
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleChange= e => {
        let value = e.target.value;
        let name = e.target.name;
        setUserCreate({
            ...userCreate,
            [name]: value,
            [name]: value,
            [name]: value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="username"
                name="username"
                value={userCreate.username}
                onChange={handleChange}
                />

                <input type="password"
                placeholder="password"
                name="password"
                value={userCreate.password}
                onChange={handleChange}
                />

                <input type="email"
                placeholder="email"
                name="email"
                value={userCreate.email}
                onChange={handleChange}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register

