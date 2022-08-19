import { Route, Switch } from "react-router-dom";
import Finish from "../Pages/Finish";
import MainPage from "../Pages/Main";
import Select from "../Pages/Select";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/selecione" component={Select} />
      <Route path="/finish" component={Finish} />
    </Switch>
  );
};

export default Routes;
