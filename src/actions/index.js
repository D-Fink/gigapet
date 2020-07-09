// import {history} from '../index';
import {axiosWithAuth} from "../utils/axiosWithAuth";

export const CREATE_USER = "CREATE_USER";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN = "LOGIN";
export const PET_DATA_FETCH = "PET_DATA_FETCH";
export const PET_FETCH_SUCCESS = "PET_FETCH_SUCCESS";
export const FOOD_DATA_FETCH = "FOOD_DATA_FETCH";
export const PETS_DATA_FETCH = "PETS_DATA_FETCH";
export const PETS_DATA_SUCCESS= "PETS_DATA_SUCCESS";
export const FOOD_FETCH_SUCCESS = "FOOD_FETCH_SUCCESS";
export const CREATE_PET_START = "CREATE_PET_START";
export const CREATE_PET = "CREATE_PET";
export const DELETE_PET = "DELETE_PET";
export const ADD_FOOD = "ADD_FOOD";
export const ADD_FOOD_SUCCESS = "ADD_FOOD_SUCCESS";
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
                username: res.data.username
            }
        });
    })
    .catch(err => {
        console.log(err)
    })
}

export const petData = id => dispatch => {
    dispatch({ type: PET_DATA_FETCH });
    axiosWithAuth()
    .get(`/auth/pet/${id}`)
    .then(res => {
        dispatch({type: PET_FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const petsData = () => dispatch => {
    dispatch({ type: PETS_DATA_FETCH });
    axiosWithAuth()
    .get(`/auth/pet/`)
    .then(res => {
        dispatch({type: PETS_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const foodData = id => dispatch => {
    dispatch({ type: FOOD_DATA_FETCH });
    axiosWithAuth()
    .get(`/auth/pet/food/${id}`)
    .then(res => {
        dispatch({type: FOOD_FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
}

export const addFood = (id, obj) => dispatch => {
    dispatch({ type: ADD_FOOD, payload: { id, obj } });
    axiosWithAuth()
    .post(`/auth/pet/food/${id}`, obj)
    .then(res => {
        dispatch({type: ADD_FOOD_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
    })
};

export const updateFood = (id, obj) => dispatch => {
    dispatch({ type: UPDATE_FOOD, payload: { id, obj } });
    axiosWithAuth()
    .put(`/auth/pet/food/${id}`, obj)
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
    dispatch({ type: CREATE_PET_START, obj });
    axiosWithAuth()
    .post(`/auth/pet/`, obj)
    .then(res => {
        dispatch({
            type: CREATE_PET,
            payload: {
                id: res.data.id,
                name: res.data.name,
                progress: res.data.progress,
                stage: res.data.stage,
                status: res.data.status,
                type: res.data.type
            }
        })
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