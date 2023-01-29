import './InfoBucket.scss';

const InfoBucket = (props) => {
    return (
        <div className="info">

            <div className='info__bucket'>
                <div>
                    <p>Humidity</p>
                    <p>{props.humidity}</p>
                </div>
                <span></span>
                <div>
                    <p>Wind Speed</p>
                    <p>{props.windSpeed}</p>
                </div>
                <span></span>
                <div>
                    <p>Feels Like</p>
                    <p>{props.feelsLike} F</p>
                </div>
            </div>

            <div className='info__bucket'>
                <div>
                    <p>Lat</p>
                    <p>{props.lat}</p>
                </div>
                <span></span>
                <div>
                    <p>Sea Level</p>
                    <p>{props.seaLevel}</p>
                </div>
                <span></span>
                <div>
                    <p>Lon</p>
                    <p>{props.lon}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoBucket;