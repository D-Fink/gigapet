import React, {useState} from 'react';
import { connect } from 'react-redux';
import {createPet, petsData, petData, addFood} from '../actions/index';

const CreatePet = props => {

    const [petCreate, setPetCreate] = useState({
        name: "", 
        progress: null, 
        stage: null, 
        status: null, 
        type: null
    });

    function getRandom() {
        return Math.floor(Math.random()*2) + 1
    }

    const handleChange = e =>{
        let value = e.target.value;
        setPetCreate({
            ...petCreate,
            name: value,
            progress: 0, 
            stage: 0, 
            status: 1, 
            type: getRandom()
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.createPet(petCreate)
        props.toggleDisplay(false)
        props.petsData()
    }

    return (
        <div className='popup'>
            <div className='popupInner'>
                <form className='popupText' onSubmit={handleSubmit}>
                    <label htmlFor="name">Pet Name:</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    value={petCreate.name}
                    onChange={handleChange} />
                    <button type='submit'>Create Pet</button>
                    <button onClick={() => {props.toggleDisplay(false)}}>Cancel</button>
                </form>
            </div>
        </div>
    )

}

export default connect(null, {createPet, petsData, petData, addFood})(CreatePet)