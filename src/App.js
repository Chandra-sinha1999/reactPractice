import {useState,useEffect} from 'react';
import DisplayData from './DisplayData';


function App() {
  const [isLoading,setIsLoading] = useState(true);
  const [apiData,setApiData] = useState([]);

  useEffect(() => {
    fetch(
      'https://mocki.io/v1/18e2400b-4cb6-4531-970c-79cf0ef63bd8'
      )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let apiArray = [];
      apiArray = data["data"];
      const newArray = [];

      for(const key in apiArray) {
        const curData = {
          id: key,
          ...apiArray[key]
        };
        newArray.push(curData);
      }

      setIsLoading(false);
      setApiData(newArray);
    });
  }, []);

  if(isLoading){
    return(
      <section>
        <p>Loading</p>
      </section>
    );
  }

  return (
    <section>
        <DisplayData record={apiData}/>
    </section>
);
}

export default App;
