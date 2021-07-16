import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/core";
import { SyncLoader } from "react-spinners";
import { useHistory } from "react-router";
import {
  browserName,
  browserVersion,
  isAndroid,
  isIOS,
  isMobileSafari,
  mobileModel,
  mobileVendor,
  osName,
  osVersion,
} from "react-device-detect";
import useWindowFocus from "use-window-focus";
const version = process.env.REACT_APP_VERSION;

const override = css`
  display: block;
  margin: 10px auto;
  border-color: red;
`;

const styles = {
  button: {
    color: "#FFF",
    backgroundColor: "#000",
    padding: 10,
    width: 120,
    margin: "20px 0",
  },
};

const Home = () => {
  const history = useHistory();
  const windowFocused = useWindowFocus();
  let toStoreTimeout;
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("Welcome");
  const [status, setStatus] = useState(false);

  const loadedAt = +new Date();

  console.log("LOADEDAT :: ", loadedAt);

  const _renderWelcome = () => {
    console.log("welcome");
    setText("Welcome");
    setTimeout(() => {
      setIndex(1);
    }, 2000);
  };

  const generateRandomString = () => {
    return Math.random().toString(36).slice(2);
  };

  const onRedirectToMobilePage = () => {
    history.push("/mobile");
  };

  const onUseUrlScheme1 = async () => {
    try {
      const playStoreUrl =
        "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=co.hoolah.buynowpaylater";

      const appStoreUrl =
        "https://apps.apple.com/my/app/hoolah-buy-now-pay-later/id1516223660";
      // window.location.replace("hoolah://myrewards/voucher12345");
      window.location.replace("hoolah://myrewards/voucher12345");

      // setTimeout(function () {
      //   if (+new Date() - loadedAt < 2000) {
      //     console.log("EHH");
      //     window.location = isAndroid ? playStoreUrl : appStoreUrl;
      //   }
      // }, 100);

      setTimeout(() => {
        if (
          window.confirm(
            `Open this page in "${isAndroid ? "Play" : "App"} Store"?`
          )
        )
          window.location.href = isAndroid ? playStoreUrl : appStoreUrl;
      }, 1000);
    } catch (error) {
      console.log("onUseUrlScheme :: ", error);
    }
  };

  const onUseUrlScheme = async () => {
    try {
      const playStoreUrl =
        "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=co.hoolah.buynowpaylater";

      const appStoreUrl =
        "https://apps.apple.com/my/app/hoolah-buy-now-pay-later/id1516223660";

      window.location.replace("hoolah://");
      setTimeout(() => {
        if (
          window.confirm(
            `Open this page in "${isAndroid ? "Play" : "App"} Store"?`
          )
        )
          window.location.href = isAndroid ? playStoreUrl : appStoreUrl;
      }, 1000);
    } catch (error) {
      console.log("onUseUrlScheme :: ", error);
    }
  };

  
  // clearTimeout if user already enter the app (for IOS)
  useEffect(() => {
    console.log("isFocused? :: ", windowFocused);
    if (!windowFocused) {
      console.log("Clearing Focus");
      clearTimeout(toStoreTimeout);
    }
  }, [toStoreTimeout, windowFocused]);

  const _onRedirect = () => {
    // _handleDeepLink();
    onUseUrlScheme();

    // if (isMobileSafari && parseInt(osVersion) >= 14) _handleIOSSafariDeepLink();
    // else _handleDeepLink();
  };

  const _renderRedirect = () => {
    setText(`Redirecting ...`);
    console.log("DEDEDED ");
    setTimeout(() => {
      _onRedirect();
    }, 1000);
  };

  useEffect(() => {
    console.log(index);
    switch (index) {
      case 0:
        return _renderWelcome();
      case 1:
        return _renderRedirect();
      default:
        return;
    }
  }, [index]);

  useEffect(() => {
    setIndex(0);
  }, []);

  return (
    <div className="App" id="home-body">
      {/* <MetaTags>
        <meta
          name="hoolahApp"
          content="app-id=1516223660"
          app-argument="https://deeplinkexample00.web.app"
        />
      </MetaTags> */}
      <h3>{text}</h3>
      <SyncLoader color="#000" loading={loading} css={override} size={10} />
      <h2>Using URL Scheme</h2>
      {/* <p>Brand : {mobileVendor}</p>
      <p>Model : {mobileModel}</p>
      <p>OS Name : {osName}</p>
      <p>OS Version : {osVersion}</p>
      <p>Browser Name : {browserName}</p>
      <p>Browser Version: {browserVersion}</p>
      <br></br>
      <p>isMobileSafari: {isMobileSafari}</p> */}
      <h2>version: {version}</h2>

      {/* <button
        style={styles.button}
        onClick={() => {
          onUseUrlScheme();
        }}
      >
        Use URL Scheme
      </button>

      <button
        style={styles.button}
        onClick={() => {
          onUseDynamicLinks();
        }}
      >
        Use Dynamic Link
      </button> */}

      {isIOS && parseInt(osVersion) >= 14 && isMobileSafari && (
        <h6>!! IOS14 [ Safari ] !!</h6>
      )}
      {/* <button onClick={_onRedirect} ref={btnRef}>
        Open App
      </button> */}
      <p>{status}</p>
    </div>
  );
};

export default Home;
