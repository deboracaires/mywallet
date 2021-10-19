//styles
import GlobalStyle from "../styles/globalStyle";

//components
import LoginPage from "./login/LoginPage.js";
import SignUpPage from "./signup/SignUpPage";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
