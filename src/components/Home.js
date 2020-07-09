import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {petsData } from "../actions/index";
import { Link } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import CreatePet from '../components/CreatePet';

const Home = props => {

    const [displayPop, setDisplayPop] = useState(false)

    useEffect(() => {
        props.petsData()
    }, [])

    const imgSelect = (stage, type) =>{
        if(stage === 0){
            return "egg"
        } else if(stage === 1 && type === 1){
            return "vivi1"
        } else if(stage === 2 && type === 1){
            return "vivi2"
        } else if(stage === 1 && type === 2){
            return "quina1"
        } else if (stage === 2 && type == 2){
            return "quina2"
        } else {
            return "dead"
        }
    }

    const status = (status) => {
        if(status === 0){
            return "Sad"
        } else if(status === 1){
            return "Happy"
        } else {
            return "Dead"
        }
    }

    const petsLength = () => {
        return props.pets.length
    }


    return (
        <div className='home'>
            <div>
                <h1 className='centerText'>Pets</h1>
                {props.isFetching && (<p>Loading Pets...</p>)}
                {props.pets.map(pet => 
                <div className='petCard' key={pet.id}>
                    <Link className='flex petLink' to={`/pet/${pet.id}`}>
                        <div id={imgSelect(pet.stage, pet.type)}>
                        </div>
                        <div className='cardStats'>
                            <h3 className='centerText'>{pet.name}</h3>
                            <p className='centerText'>Status: <span className={status(pet.status)}>{status(pet.status)}</span></p>
                                <ProgressBar completed={pet.progress} />
                        </div>
                    </Link>
                </div>
                )}
            </div>
            <button onClick={() => {setDisplayPop(true)}} className='createPetBtn'>Create A Pet</button>
            {displayPop ? (
                <CreatePet toggleDisplay={setDisplayPop} pet={props.pets[props.pets.length - 1]}/>
            ) : null}
        </div>
    )
}

const mapStateToProps = state => {

    return {
        pets: state.pets,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {petsData})(Home)