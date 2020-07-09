import React, {useEffect} from "react";
import pyramid0 from '../img/pyramid0.png';
import pyramid1l from '../img/pyramid1l.png';
import pyramid1r from '../img/pyramid1r.png';
import pyramid2l from '../img/pyramid2l.png';
import pyramid2r from '../img/pyramid2r.png';
import pyramid3 from '../img/pyramid3.png';
import { connect } from "react-redux";
import {foodData} from '../actions/index';

const FoodCard = props => {

    useEffect(() => {
        props.foodData(props.petId)
    }, [])

    return (
        <div>
            <div className='foodData'>
                <img src={pyramid3} />
                <img src={pyramid2l} />
                <img src={pyramid2r} />
                <img src={pyramid1l} />
                <img src={pyramid1r} />
                <img src={pyramid0} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        foods: state.foods,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {foodData})(FoodCard)