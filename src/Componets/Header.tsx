import React from "react";
import "./Style/Header.scss";

import logo from "./img/logo.jpg";
import { Link } from "./Link";

export const Header = () => {
  return (
    <div className="Header">
      <div className="H-c">
        <div>
          <a href="#/">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="H-r">
          <Link linkAddress="#/members" linkName="Members" />
          <Link linkAddress="#/letter" linkName="Letter" />
          <Link linkAddress="#/xstate" linkName="XState" />
        </div>
      </div>
    </div>
  );
};
