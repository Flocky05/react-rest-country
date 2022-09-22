import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Men from './component/Men/Men';
import Titel from './component/Title/Titel';

function App() {
  return (
    <div className="App">
      <Titel></Titel>
      <Country></Country>
      <Men></Men>
    </div>
  );
}
// function Countries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }
//     , [])
//   return (
//     <div>
//       {/* <h1>Visisting All countries in the world</h1>
//       <h2>Total Country :{countries.length}</h2>
//       {
//         countries.map(country => <Country Name={country.name.common} Population={country.population}></Country>)
//       } */}
//     </div>
//   )
// }
// // function Country(props) {
// //   return (
// //     <div className='country'>
// //       <h3>Country Name:{props.Name}</h3>
// //       <p>Population:{props.Population}</p>
// //     </div>
// //   )
// // }
export default App;
