import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formDetailsAction } from '../../store/actions/form';
import ShowDetails from '../Home/ShowDetails';

const Form = () => {
    const dispatch = useDispatch();
    // const allReducersUpdatedData = useSelector(state => state);
    const [formData, setFormData] = useState({});
    const [isToggle, setIsToggle] = useState(true);

    const updateFormData = (key, value) => {
        setFormData({ ...formData, [key]: value });
    }

    const submitFormData = (e) => {
        e.preventDefault();
        dispatch(formDetailsAction(formData));
        setIsToggle(false);
    }

    return isToggle ?
        <form onSubmit={submitFormData}>
            <input placeholder="Enter your name" required onChange={(e) => updateFormData('userName', e.target.value)} />
            <input placeholder="Enter your mobile" required onChange={(e) => updateFormData('mobileNo', e.target.value)} />
            <input placeholder="Enter your email" required onChange={(e) => updateFormData('email', e.target.value)} />
            <input placeholder="Enter your address" required onChange={(e) => updateFormData('address', e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        :
        <ShowDetails />;
}

export default Form;