import { updateObject } from '../../utilities/updateObject';
import * as  actionTypes from '../constants/form';

const initialState = {
    registration: {}
}

export const formDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_FORM_DETAILS:
            return updateObject(state, action);
        default:
            return state;
    }
};
