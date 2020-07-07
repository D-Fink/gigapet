import {
    CREATE_USER,
    LOGIN_FETCH,
    LOGIN,
    PET_DATA_FETCH,
    PET_FETCH_SUCCESS,
    FOOD_DATA_FETCH,
    FOOD_FETCH_SUCCESS,
    CREATE_PET,
    DELETE_PET,
    ADD_FOOD,
    UPDATE_FOOD,
    UPDATE_FOOD_SUCCESS
} from "../actions/index";

const initialState = {
    pets: [],
    foods: [],
    petData: {
        name: "",
        type: 0,
        stage: 0,
        progress: 0,
        status: 0
    },
    foodData: {
        carbs: 0,
        fruits: 0,
        veggies: 0,
        dairy: 0,
        protein: 0,
        sweets: 0
    },
    userState: {
        username: "",
        password: ""
    },
    isFetching: false,
    error: null,
    changeTrigger: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_FETCH :
            return {
                ...state,
                isFetching: true
            }
            case LOGIN :
                return {
                    ...state,
                    isFetching:false,
                    userState: {
                        ...state.userState,
                        username: action.payload.username,
                        password: action.payload.password
                    }
                }
        case PET_DATA_FETCH :
            return {
                ...state,
                isFetching: true
            }
        case PET_FETCH_SUCCESS :
            return {
                ...state,
                pets: action.payload,
                isFetching: false
            }
        case FOOD_DATA_FETCH :
            return {
                ...state,
                isFetching: true
            }
        case FOOD_FETCH_SUCCESS :
            return {
                ...state,
                foods: action.payload,
                isFetching: false
            }
        case CREATE_PET :
            return {
                ...state,
                pets: [...state.pets, action.payload]
            }
        default :
        return state
    }
}