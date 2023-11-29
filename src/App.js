import { BrowserRouter as Router, } from "react-router-dom";
import { FormProvider } from "./context/form/FormContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <FormProvider>
      <div>
        <Router>
          <AppRouter />
        </Router>
      </div>
    </FormProvider>
  );
}

export default App;