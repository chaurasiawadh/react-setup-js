import { combineReducers } from "redux";
import { formDetailsReducer } from './reducers/form';

export default combineReducers({
    registraionData: formDetailsReducer
});