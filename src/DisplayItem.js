function DisplayItem(props) {
    
    return(
        <li>
            <img src={props.icon} className="icon" alt={props.title}/>
            <h2>{props.time.length === 1? (props.time[0] + " mins"):(props.time[0] + " : " + props.time[1])}</h2>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}

export default DisplayItem;
