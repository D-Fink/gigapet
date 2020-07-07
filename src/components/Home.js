import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {petData, createPet} from "../actions/index";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Home = props => {

    useEffect(() => {
        props.petData()
    }, [])

    function getRandom() {
        return Math.floor(Math.random()*3) + 1
    }

    const initialPet = {
        name: "", 
        progress: null, 
        stage: null, 
        status: null, 
        type: null
    }

    const [petData, setPetData] = useState(initialPet);

    const handleChange = e =>{
        let value = e.target.value;
        setPetData({
            ...petData,
            name: value,
            progress: 0, 
            stage: 0, 
            status: 1, 
            type: getRandom()
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.createPet(petData)
    }


    return (
        <div>
            <div>
                <h1>Pets</h1>
                {props.pets.map(pet => <p>{pet.name}</p>)}
            </div>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Pet Name:</label>
                <input
                id="name"
                name="name"
                type="text"
                value={petData.name}
                onChange={handleChange} />
                <button type='submit'>Create Pet</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.pets)
    return {
        pets: state.pets
    }
}

export default connect(mapStateToProps, {petData, createPet})(Home)