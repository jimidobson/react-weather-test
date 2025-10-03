import WeatherTime from "./WeatherTime";

function Day(props) {
  return (
    <div className="Day-item-parent">
      <WeatherTime
        key={props.key}
        icon={props.icon}
        dateTitle={props.dateTitle}
        weatherTitle={props.weatherTitle}
        weatherDescription={props.weatherDescription}
      />
    </div>
  );
}

export default Day;
