import Alert from "./components/Alert";
import Buttons from "./components/Buttons";


function App() {
  let text = 'test button'
  let type = 'primary'

  return (
    <div>
      <Buttons text={text} type={type}/>
      <Alert>
        Hello <span>wrld</span>World
      </Alert>
    </div>
  );
}

export default App;
