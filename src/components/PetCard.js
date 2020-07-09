import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import {petData, addFood, foodData, updateFood} from "../actions/index";
import ProgressBar from "./ProgressBar";
import FoodCard from './FoodCard';
import bread from '../img/bread.png';
import candy from '../img/candy.png';
import milk from '../img/dairy.png';
import veggie from '../img/Veggie.png';
import fruit from '../img/fruit.png';
import meat from '../img/meat.png'; 
import egg from '../img/egg.png';
import vivi1 from '../img/vivi.png';
import vivi2 from '../img/vivi_2.png';
import quina1 from '../img/quina.png';
import quina2 from '../img/quina_2.png';
import tombstone from '../img/tombstone.png';

const PetCard = props => {

    let d = new Date()
    const dateCheck = () => {
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
    }

    const initialFoodState = {
        carbs: 0,
        fruits: 0,
        veggies: 0,
        dairy: 0,
        protein: 0,
        sweets: 0,
        created_at: dateCheck()
    }

    const [visibility, setVisibility] = useState(false)
    const [newFood, setNewFood] = useState(initialFoodState)
    const [grabbedFood, setGrabbedFood] = useState("")
    const [foodToUpdate, setFoodToUpdate] = useState({carbs: 0, fruits: 0, veggies: 0, dairy: 0, protein: 0, sweets: 0})

    useEffect(() => {
        props.petData(`${props.match.params.id}`)
    }, [props.match.params.id])

    const imgSelect = (stage, type) =>{
        if(stage === 0){
            return egg
        } else if(stage === 1 && type === 1){
            return vivi1
        } else if(stage === 2 && type === 1){
            return vivi2
        } else if(stage === 1 && type === 2){
            return quina1
        } else if (stage === 2 && type == 2){
            return quina2
        } else {
            return tombstone
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

    const generateFoodData = () => {
        setVisibility(true)
        props.foodData(props.match.params.id)
        setFoodToUpdate(props.foods[props.foods.length - 1])
        console.log(foodToUpdate)
        if(props.foods.length === 0){
            props.addFood(props.match.params.id, newFood)
        } else if (props.foods[props.foods.length - 1].created_at !== dateCheck()){
            props.addFood(props.match.params.id, newFood)
        } else {
            return
        }
    }

    const onDrag = (e, item) => {
        e.preventDefault()
        return setGrabbedFood(item)
    }

    const onDragOver = e => {
        e.preventDefault()
    }

    const onDrop = (e) => {
        console.log(grabbedFood)
        let name = grabbedFood
        let value = foodToUpdate[name] + 1
        setFoodToUpdate({
            ...foodToUpdate,
            [name]: value
        })
        console.log(foodToUpdate)
    }

    const handleSubmit = e => {
        props.updateFood(props.match.params.id, foodToUpdate)
        setVisibility(false)
    }

    return (
        <div className='flexColumn home'>
            <div className='foodCard'>
                <ProgressBar completed={props.pet.progress} />
                <FoodCard petId={props.match.params.id} />
            </div>
            <div className='petMain'>
                <h2>{props.pet.name}</h2>
                <p>Status: <span>{status(props.pet.status)}</span></p>
                <div className='flex'>
                    { visibility ? (
                        <div className='foodList'>
                            <img draggable onDrag={e => onDrag(e, 'carbs')} src={bread} />
                            <img draggable onDrag={e => onDrag(e, 'sweets')} src={candy} />
                            <img draggable onDrag={e => onDrag(e, 'dairy')} src={milk} />
                        </div>
                    ) : null}
                    <img className='petMainImg' onDrop={e => onDrop(e)} onDragOver={(e => onDragOver(e))} src={imgSelect(props.pet.stage, props.pet.type)}/>
                    { visibility ? (
                        <div  className='foodList'>
                            <img draggable onDrag={e => onDrag(e, 'veggies')} src={veggie} />
                            <img draggable onDrag={e => onDrag(e, 'fruits')} src={fruit} />
                            <img draggable onDrag={e => onDrag(e, 'protein')} src={meat} />
                        </div>
                    ) : null}
                </div>
                { visibility ? (
                    <button onClick={() => handleSubmit()}>Eat</button>
                ): (
                    <button onClick={() => generateFoodData()}>Feed</button>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.foods[0])
    return {
        pet: state.pet,
        foods: state.foods[0]
    }
}


export default connect(mapStateToProps, {petData, addFood, foodData, updateFood})(PetCard)