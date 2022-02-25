import { Movies } from "./Componets/Movies/Movies";
import { Members } from "./Componets/Members/Members";
import { Letter } from "./Componets/Letter/Letter";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { XState } from "./Componets/XState/XState";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route exact path={"/"}>
            <Movies />
          </Route>

          <Route path={"/members"}>
            <Members />
          </Route>
        
        
          <Route path={"/letter"}>
            <Letter />
          </Route>
        
        
          <Route path={"/xstate"}>
            <XState />
          </Route>

        </Switch>

      </div>
    </Router >
  );
}

export default App;
