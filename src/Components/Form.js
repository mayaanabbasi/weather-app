import React from 'react';

const Form = ({getWeather}) => {
    return (
        <form onSubmit={getWeather}>
            <input type='text' name='city' placeholder='City...' required></input>
            <input type='text' name='country' placeholder='Country...' required></input>
            <button>Get weather</button>
        </form>
    );
}

export default Form;