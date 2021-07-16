import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { isAndroid, isIOS, isMobile } from "react-device-detect";

const version = process.env.REACT_APP_VERSION;

const playStoreUrl =
  "https://play.google.com/store/apps/details?id=co.hoolah.buynowpaylater";

const appStoreUrl =
  "https://apps.apple.com/my/app/hoolah-buy-now-pay-later/id1516223660";

const payloadMY =
  "000201010211530345826360032ce15eff9c3eb49a4b3e4e6287e63d51b520432005802MY5902MY6011Johor Bahru62240520384231364531353345446304fd8c";

const payloadMY2 =
  "000201010211530345826360032ce15eff9c3eb49a4b3e4e6287e63d51b520432005802MY5902MY6011Johor%20Bahru62240520384231364531353345446304fd8c";

const deeplink = `hoolah://scan/000201010211530345826360032ce15eff9c3eb49a4b3e4e6287e63d51b520432005802MY5902MY6011Johor Bahru62240520384231364531353345446304fd8c`;

const LandingPage = () => {
  const onRedirectToStore = async () => {
    try {
      window.location.replace(isAndroid ? playStoreUrl : appStoreUrl);
    } catch (error) {
      console.log("onUseUrlScheme :: ", error);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setTimeout(() => {
        onRedirectToStore();
      }, 1000);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px",
      }}
    >
      <h2>This is the Landing Page</h2>
      <p>version: {version}</p>
    </div>
  );
};

export default LandingPage;
