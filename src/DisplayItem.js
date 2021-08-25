function DisplayItem(props) {
    var curTime = "";
    const time = props.timeframe;
    if(time.length === 1) {
        curTime= time[0] + " mins";
    }
    else {
        curTime= time[0] + " : " + time[1];
    } 
    
    return(
        <li>
            <div>
                <img src={props.icon} className="icon"/>
                <h2>{curTime}</h2>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </li>
    );
}

export default DisplayItem;