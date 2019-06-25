import React from 'react';
import Form from './Components/Form';
import Title from './Components/Title';
import Display from './Components/Display';

const API_KEY = 'da74fef15fef93448150fee9215da6bf';
class App extends React.Component {
  state = {
    Temperature: undefined,
    City: undefined,
    Country: undefined,
    Humidity: undefined,
    Description: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      Temperature: data.main.temp,
      City: data.name,
      Country: data.sys.country,
      Humidity: data.main.humidity,
      Description: data.weather[0].description
    })
  }
  render () {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                 <Title /> 
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Display 
                    Temperature={this.state.Temperature} 
                    City={this.state.City} 
                    Country={this.state.Country}
                    Humidity={this.state.Humidity}
                    Description={this.state.Description}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
        
        
export default App;