import React, { useEffect, useState } from "react";
import { isAndroid, isIOS, isMobile } from "react-device-detect";

import appStore from "../assets/as_btn.png";
import googlePlay from "../assets/gp_btn.png";

const version = process.env.REACT_APP_VERSION;
const styles = {
  button: {
    backgroundColor: "#000",
    color: "#FFF",
    width: "200px",
    padding: "20px 0",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "20px",
    cursor: "pointer",
  },
  asImg: {
    width: "200px",
    height: "66px",
    margin: "0 0 10px 0",
    cursor: "pointer",
  },
  gpImg: {
    width: "230px",
    height: "100px",
    margin: "10px 0 0 0",
    cursor: "pointer",
  },
};

const Mobile = () => {
  // const _onGoToStore = () => {
  //   if (isIOS) {
  //     window.location =
  //       "https://apps.apple.com/my/app/hoolah-buy-now-pay-later/id1516223660";
  //   }
  //   if (isAndroid) {
  //     window.location =
  //       "https://play.google.com/store/apps/details?id=co.hoolah.buynowpaylater";
  //   }
  // };

  const onOpenApp = () => {
    window.location.href = "hoolah://scan/?code=123456";
  };

  const onGoToAppStore = () => {
    window.open(
      "https://apps.apple.com/my/app/hoolah-buy-now-pay-later/id1516223660"
    );
  };

  const onGoToPlayStore = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=co.hoolah.buynowpaylater"
    );
  };

  useEffect(() => {
    if (isMobile) onOpenApp();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2>Download Now!</h2>
      <p>version: {version}</p>

      {/* {isMobile && (
        <>
          <button
            style={styles.button}
            onClick={() => {
              onOpenApp();
            }}
          >
            Open App
          </button>

          <h4>Or</h4>
        </>
      )} */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          alt=""
          src={appStore}
          style={styles.asImg}
          onClick={() => {
            onGoToAppStore();
          }}
        />

        <img
          alt=""
          src={googlePlay}
          style={styles.gpImg}
          onClick={() => {
            onGoToPlayStore();
          }}
        />
      </div>
    </div>
  );
};

export default Mobile;
