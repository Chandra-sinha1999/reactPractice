import {useState,useEffect} from 'react';
import DisplayData from './DisplayData';

function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch( 'https://mocki.io/v1/18e2400b-4cb6-4531-970c-79cf0ef63bd8')
    .then((response) => { return response.json(); })
    .then(recivedData => setData(recivedData.data) );
  }, []);

  return (
    <section>
        <DisplayData record={data}/>
    </section>
  );
}

export default App;

