import Form from './components/form/form';
import Weather from './components/weather/weather';
import './App.css';
import { Component } from 'react';



class App extends Component {

  state = {
    temp: "",
    humidity: "",
    description: "",
    city: "",
    country: "",
    error: ""
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.city.value
    const country = e.target.country.value
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`)
    const data = await api.json()
    console.log(data)

    if (data.name && data.sys.country) {
      this.setState({
        temp: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        city: city,
        country: country
      })
    } else {
      this.setState({
        temp: "",
        humidity: "",
        description: "",
        city: "",
        country: "",
        error: "Enter right data"
      })
    }
    console.log(this.state)

  }

  render() {
    return (
      <div className="App">
        <h3>Weather App</h3>
        <Form getWeather={this.getWeather} />
        <Weather stat={this.state} />
      </div>
    );
  }
}

export default App;
