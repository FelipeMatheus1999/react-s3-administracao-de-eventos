import Supplier from "../components/Supplier";
import Confraternization from "../components/Confraternization";
import Graduation from "../components/Graduation/index.jsx";
import Wedding from "../components/Wedding";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Supplier />
      </Route>
      <Route path="/confraternization">
        <Confraternization />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
      <Route path="/wedding">
        <Wedding/>
      </Route>
    </Switch>
  );
};

export default Routes;
