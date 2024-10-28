import ListGroup from './components/ListGroup';

function App(){
  let items = ["Satoru", "Suguru", "Hi"];
  // equivalent to <div><Message></Message></div>
  return <div><ListGroup items={items} heading='goats'/></div>
}

export default App;