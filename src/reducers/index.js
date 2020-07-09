import {
    CREATE_USER,
    LOGIN_FETCH,
    LOGIN,
    PET_DATA_FETCH,
    PET_FETCH_SUCCESS,
    PETS_DATA_FETCH,
    PETS_DATA_SUCCESS,
    FOOD_DATA_FETCH,
    FOOD_FETCH_SUCCESS,
    CREATE_PET,
    DELETE_PET,
    ADD_FOOD,
    UPDATE_FOOD,
    UPDATE_FOOD_SUCCESS,
    ADD_FOOD_SUCCESS
} from "../actions/index";

const initialState = {
    pets: [],
    foods: [],
    pet: {},
    petData: {
        id: 0,
        name: "",
        type: 0,
        stage: 0,
        progress: 0,
        status: 0
    },
    foodData: {
        id: 0,
        carbs: 0,
        fruits: 0,
        veggies: 0,
        dairy: 0,
        protein: 0,
        sweets: 0,
        pet_id: 0,
        created_at: ""
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
                pet: action.payload[0],
                isFetching: false
            }
        case PETS_DATA_FETCH :
            return{
                ...state,
                isFetching: true
            }
        case PETS_DATA_SUCCESS :
            return{
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
                foods: [action.payload],
                isFetching: false
            }
        case CREATE_PET :
            return {
                ...state,
                petData: {
                    ...state.petData,
                    id: action.payload.id,
                    name: action.payload.name,
                    type: action.payload.type,
                    stage: action.payload.stage,
                    progress: action.payload.progress,
                    status: action.payload.status
                },
                pets: [...state.pets, action.payload]
            }
        case DELETE_PET :
            return {
                ...state,
                pets: [...state.pets, action.payload]
            }
        case ADD_FOOD :
            return {
                ...state
            }
        case ADD_FOOD_SUCCESS :
            return{
                ...state,
            }
        case UPDATE_FOOD :
            return {
                ...state,
                isFetching: true
            }
        case UPDATE_FOOD_SUCCESS :
            return {
                ...state,
                isFetching: false,
                foods: [...state.foods, action.payload]
            }
        default :
        return state
    }
}