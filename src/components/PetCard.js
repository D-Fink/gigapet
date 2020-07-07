import React, { useEffect } from "react";
import {connect} from "react-redux";
import {petData} from "../actions/index";

const PetCard = props => {

    useEffect(() => {
        props.petData()
        console.log(props.pet)
    }, [])

    return (
        <div>
            {props.pet.map(pet => <p>{pet.name}</p>)}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.pets)
    return {
        pet: state.pets
    }
}

export default connect(mapStateToProps, {petData})(PetCard)