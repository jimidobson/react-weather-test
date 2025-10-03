function WeatherTime(props) {
  return (
    <div className="Weather-item-parent">
      <img src={props.icon} alt="" />
      <li key={props.key} className="Weather-item-list">
        <h3>{props.dateTitle}</h3>
        <p>{props.weatherTitle}</p>
        <p>{props.weatherDescription}</p>
      </li>
    </div>
  );
}
