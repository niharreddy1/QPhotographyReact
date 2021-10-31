import "./App.css";
import { Route, Switch } from "react-router-dom";
import WildlifePage from "./pages/WildlifePage";
import HomePage from "./pages/HomePage";
import LandscapesPage from "./pages/LandscapesPage";
import PortraitsPage from "./pages/PortraitsPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/wildlife">
          <WildlifePage />
        </Route>
        <Route path="/landscapes">
          <LandscapesPage />
        </Route>
        <Route path="/portraits">
          <PortraitsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
