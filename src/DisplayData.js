import DisplayItem from "./DisplayItem";

function DisplayData(props) {
    
    function loadingHandler() {
        return(
            <section>
              <p>Loading</p>
            </section>
        );
    }

    function dataHandler() {
        return (
            <ul className="card">
                {props.record.map((singleRecord) => (
                    <DisplayItem 
                        key = {singleRecord.section}
                        icon = {singleRecord.icon}
                        title = {singleRecord.title}
                        description = {singleRecord.desc}
                        time = {singleRecord.timeframe}
                    />
                ))}
            </ul>
        );
    }

    return (props.record.length === 0)? loadingHandler() : dataHandler();
}

export default DisplayData;
