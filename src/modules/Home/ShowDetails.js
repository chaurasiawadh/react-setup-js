import React from 'react';
import { useSelector } from 'react-redux';

const ShowDetails = () => {
    const registerData = useSelector(state => state.registraionData.registration);
    return (
        <div>
            <h4>Name: {registerData.userName} </h4>
            <h4>Mobile No: {registerData.mobileNo} </h4>
            <h4>Email: {registerData.email} </h4>
            <h4>Address: {registerData.address} </h4>
        </div>
    )
}
export default ShowDetails;