import { BrowserRouter as Router, } from "react-router-dom";
import { FormProvider } from "./context/form/FormContext";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <FormProvider>
        <div>
          <Router>
            <AppRouter />
          </Router>
        </div>
      </FormProvider>
    </AuthProvider>
  );
}

export default App;