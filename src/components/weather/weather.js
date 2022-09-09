
function Weather(props) {
    const temp = props.stat.temp - 273.15
    const tempC = temp.toFixed(2)

    return (
        <div className="weather">
            {
                props.stat.city && <p> <span>City : </span>{props.stat.city}</p>
            }
            {
                props.stat.country && <p><span>Country : </span>{props.stat.country }</p>
            }
            {
                props.stat.temp && <p> <span>Temperature : </span>{tempC}°C</p>
            }
            {
                props.stat.humidity && <p> <span> Humidity : </span>{props.stat.humidity}</p>}

            {
                props.stat.description && <p><span> description : </span>{props.stat.description}</p>
            }
            {
                props.stat.error && <p><span> {props.stat.error}</span></p>
            }
        </div>
    )

}

export default Weather