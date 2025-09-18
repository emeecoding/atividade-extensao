import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import "./index.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main> 
        <AppRoutes />
      </main>
    </Router>
  );
}

export default App;
