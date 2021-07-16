import React, { useEffect } from "react";
import { MetaTags } from "react-meta-tags";
import {
  browserName,
  browserVersion,
  deviceDetect,
  isAndroid,
  isIOS,
  mobileModel,
  mobileVendor,
  osName,
  osVersion,
} from "react-device-detect";

const Login = () => {
  return (
    <div className="App" id="home-body">
      {/* <MetaTags>
        <meta
          name="hoolahApp"
          content="app-id=1516223660"
          app-argument="https://deeplinkexample00.web.app"
        />
      </MetaTags> */}
      <h5>Login Page</h5>
      <p>Brand : {mobileVendor}</p>
      <p>Model : {mobileModel}</p>
      <p>OS Name : {osName}</p>
      <p>OS Version : {osVersion}</p>
      <p>Browser Name : {browserName}</p>
      <p>Browser Version: {browserVersion}</p>

      <h6>version 1.1.33</h6>
    </div>
  );
};

export default Login;
