function Day(props) {
  return (
    <div className="Day-item-parent">
      <img src={props.icon} alt="" />
      <li key={props.key} className="Day-item-list">
        <h3>{props.dateTitle}</h3>
        <p>{props.weatherTitle}</p>
        <p>{props.weatherDescription}</p>
      </li>
    </div>
  );
}

export default Day;
