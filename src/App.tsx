import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const showAlert = () => {
    //console.log("clicked");
    setAlertVisibility(true);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>wrld</span>World
        </Alert>
      )}
      <Button type="primary" onClick={showAlert}>
        test
      </Button>
    </div>
  );
}

export default App;
