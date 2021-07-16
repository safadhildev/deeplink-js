import "./App.css";
import { css } from "@emotion/core";
import { SyncLoader } from "react-spinners";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./screens/Home";
import Mobile from "./screens/Mobile";
import Login from "./screens/Login";
import QRCocde from "./screens/QRCode";
import LandingPage from "./screens/LandingPage";
import MyRewards from "./screens/MyRewards";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/mobile" exact>
        <Mobile />
      </Route>
      <Route path="/deepLinker" exact>
        <Mobile />
      </Route>
      <Route path="/scan=*">
        <QRCocde />
      </Route>
      <Route path="/qrcode" exact>
        <QRCocde />
      </Route>
      <Route path="/landingpage" exact>
        <LandingPage />
      </Route>
      <Route path="/myrewards" exact>
        <MyRewards />
      </Route>
    </Router>
  );
}

export default App;
