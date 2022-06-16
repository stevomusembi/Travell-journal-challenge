
import './style.css';
import Nav from './Nav';
import LocationCard from './LocationCard';
import data from './data';

function App() {
  let card = data.map(item => {
    return (
      <LocationCard
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      <hr />
      <section className='card-list'>
        {card}
      </section>
    </div>
  );
}

export default App;
