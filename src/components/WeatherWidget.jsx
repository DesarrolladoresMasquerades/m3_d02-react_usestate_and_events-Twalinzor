export default function WeatherWidget(props) {
    const {city, icon, celsius, unit} = props;
    return(
        <div>
            <h1>Weather in {city}</h1>

            <span>{icon}</span>

            <h2>{celsius} º{unit}</h2>
        </div>
    )
}