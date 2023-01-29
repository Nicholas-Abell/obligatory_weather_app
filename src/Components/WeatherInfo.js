import './WeatherInfo.scss';

const WeatherInfo = (props) => {
    return (
        <div className='weather'>
            <h1 className='weather__town'>{props.town}</h1>
            <h1 className='weather__temp'>{props.temp} F</h1>
            <h1 className='weather__description'>{props.description}</h1>
        </div>
    )
}

export default WeatherInfo;