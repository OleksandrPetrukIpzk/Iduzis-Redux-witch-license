import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers = compose(applyMiddleware(thunk))
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools(composeEnhancers))

export default store