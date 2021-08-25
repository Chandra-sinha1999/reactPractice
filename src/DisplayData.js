import DisplayItem from "./DisplayItem";

function DisplayData(props) {
    //console.log(props.record);
    return (
        <ul className="card">
            {props.record.map((singleRecord) => (
                <DisplayItem 
                    key = {singleRecord.id}
                    icon = {singleRecord.icon}
                    title = {singleRecord.title}
                    description = {singleRecord.desc}
                    timeframe = {singleRecord.timeframe}
                />
            ))}
        </ul>
    );
}

export default DisplayData;