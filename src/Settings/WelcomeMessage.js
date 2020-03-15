import React from "react";
import { AppContext } from "../App/AppProvider";

function welcomeMessage() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to Bit, please select your favorite coins to begin.{" "}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}
export default welcomeMessage;
