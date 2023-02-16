import {setSelectionRange} from "@testing-library/user-event/dist/utils";

const initialState = {
    arrObj: [
        {
            key: '',
            value: ''
        },
    ],
}
const CHANGE_KEY = "CHANGE_KEY"
const CHANGE_VALUE = "CHANGE_VALUE"
const NEW_ELEMENT = "NEW_ELEMENT"
const DELETE_ELEMENT = "DELETE_ELEMENT"
export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_KEY: {
            return {
                ...state, arrObj: state.arrObj.map((e, index) => {
                    if (index === action.payload.index) {
                        return {...e, key: action.payload.key};
                    }
                    return e;
                })
            }
        }
        case CHANGE_VALUE: {
            return {
                ...state, arrObj: state.arrObj.map((e, index) => {
                    if (index === action.payload.index) {
                        return {...e, value: action.payload.value};
                    }
                    return e;
                })
            }
        }
        case NEW_ELEMENT: {

            return {
                ...state, arrObj: [...state.arrObj, {
                    key: '',
                    value: ''
                }],
            }
        }
        case DELETE_ELEMENT: {
            return {
                ...state, arrObj: state.arrObj.filter((item, index) => {
                    return index !== action.payload.index
                }),
            }
        }
        default:
            return state
    }
}
export const changeKey = (payload) => ({type: CHANGE_KEY, payload});

export const changeValue = (payload) => ({type: CHANGE_VALUE, payload});

export const addElement = () => ({type: NEW_ELEMENT});

export const deleteElement = (payload) => ({type: DELETE_ELEMENT, payload});
