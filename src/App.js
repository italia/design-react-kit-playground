import CompleteHeader from "./CompleteHeader"
import CompleteValidationForm from "./ValidationForm"

import './App.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';



function App() {
  return (
    <div>
      <CompleteHeader></CompleteHeader>
      <div className="container my-4">
        <h3>Form di esempio con validazione</h3>
        <div className="my-4">
          <CompleteValidationForm></CompleteValidationForm>
        </div>
      </div>
    </div>
  );
}

export default App;
