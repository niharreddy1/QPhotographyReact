import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandscapesPage from "./pages/LandscapesPage";
import PortraitsPage from "./pages/PortraitsPage";
import WildlifePage from "./pages/WildlifePage";

function App() {
  return (
    <div>
      {/* basename={process.env.PUBLIC_URL} */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/wildlife" component={WildlifePage} />
          <Route path="/landscapes" component={LandscapesPage} />
          <Route path="/portraits" component={PortraitsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
