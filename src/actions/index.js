import {history} from '../index';
import axios from 'axios';
import {axiosWithAuth} from "../utils/axiosWithAuth";

export const CREATE_USER = "CREATE_USER";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN = "LOGIN";
export const PET_DATA_FETCH = "PET_DATA_FETCH";
export const PET_FETCH_SUCCESS = "PET_FETCH_SUCCESS";
export const FOOD_DATA_FETCH = "FOOD_DATA_FETCH";
export const FOOD_FETCH_SUCCESS = "FOOD_FETCH_SUCCESS";
export const CREATE_PET = "CREATE_PET";
export const DELETE_PET = "DELETE_PET";
export const ADD_FOOD = "ADD_FOOD";
export const UPDATE_FOOD = "UPDATE_FOOD";
export const UPDATE_FOOD_SUCCESS = "UPDATE_FOOD_SUCCESS";

export const userLogin = creds => dispatch => {
    dispatch({type: LOGIN_FETCH});
    axiosWithAuth()
    .post('/users/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: LOGIN,
            payload: {
                username: res.data.username,
                email: res.data.email
            }
        });
    })
    .catch(err => {
        console.log(err)
    })
}

export const petData = () => dispatch => {
    dispatch({ type: PET_DATA_FETCH });
    axiosWithAuth()
    .get(`/auth/pet/`)
    .then(res => {
        dispatch({type: PET_FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const foodData = id => dispatch => {
    dispatch({ type: FOOD_DATA_FETCH });
    axiosWithAuth()
    .get(`/auth/pet/${id}`)
    .then(res => {
        dispatch({type: FOOD_FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const addFood = id => dispatch => {
    dispatch({ type: ADD_FOOD, payload: {id} });
    axiosWithAuth()
    .post(`/auth/pet/${id}`)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
};

export const updateFood = (id, obj) => dispatch => {
    dispatch({ type: UPDATE_FOOD, payload: { id, obj } });
    axiosWithAuth()
    .put(`/auth/pet/${id}`, obj)
    .then(res => {
        dispatch({
            type: UPDATE_FOOD_SUCCESS,
            payload: {
                carbs: res.data.carbs,
                fruits: res.data.fruits,
                veggies: res.data.veggies,
                dairy: res.data.dairy,
                protein: res.data.protein,
                sweets: res.data.sweets
            }
        })
    })
    .catch(err => console.log(err.response))
}

export const createPet = obj => dispatch => {
    dispatch({ type: CREATE_PET, obj });
    axiosWithAuth()
    .post(`/auth/pet/`, obj)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

export const deletePet = id => dispatch => {
    axiosWithAuth()
    .delete(`/auth/pet/${id}`)
    .then(res => {

    })
    .catch(err => {
        console.log(err)
    })
}