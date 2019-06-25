import React from 'react';

const Display = (props) => {
    return (
        <div className="weather__info">
            { 
                props.City && props.Country && <p className="weather__key">Location: 
                <span className="weather__value"> {props.City}, {props.Country}</span>
                </p>
            }
            { 
                props.Temperature && <p className="weather__key">Temprature: 
                <span className="weather__value"> {props.Temperature}</span>
                </p>
            }
            { 
                props.Humidity && <p className="weather__key">Humidity: 
                <span className="weather__value"> {props.Humidity}</span>
                </p>
            }
            { 
                props.Description && <p className="weather__key">Description: 
                <span className="weather__value"> {props.Description}</span>
                </p>
            }
        </div>
    );
}

export default Display; 