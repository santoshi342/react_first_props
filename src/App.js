import './App.css';
import Header from './header';
import Footer from './footer';
import CarComponent from './carComponent';

const carData = {
  id: '101',
  color: 'red1',
  name: 'BMW1',
  speed: '100km/hrs',
  size:'3meter'
}



const App = () => {
  return (
    <>
      <Header />
     
      {/* passing props */}
      <CarDetails details={carData} />
      <CarComponent details={carData}/>
      <Footer />
    </>
  );
}


const CarDetails = (props) => {
  return (
    <div>
      <h1> Car name :{props.details.color} </h1>
      <h2> Car color : {props.details.name} </h2>
    </div>
  )
}


export default App;



// const carData = [
//   {
//     id: '101',
//     color: 'red',
//     name: 'BMW'
//   },
//   {
//     id: '102',
//     color: 'yellow',
//     name: 'BM'
//   },
//   {
//     id: '103',
//     color: 'black',
//     name: 'MW'
//   },
// ]