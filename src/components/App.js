//styles
import GlobalStyle from "../styles/globalStyle";

//components
import LoginPage from "./login/LoginPage.js";
import SignUpPage from "./signup/SignUpPage.js";
import PrincipalPage from "./principalPage/principalPage.js";

import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <LoginPage></LoginPage>
        </Route>     
        <Route path="/cadastro" exact>
          <SignUpPage></SignUpPage>
        </Route>
        <Route path="/principal" exact>
          <PrincipalPage></PrincipalPage>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
