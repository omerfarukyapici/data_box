import React from "react";
import { Link } from "./Link";
import "./Style/Footer.scss";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="F-c">
        <Link linkAddress="#/" linkName="Movies" />
        <Link linkAddress="#/members" linkName="Members" />
        <Link linkAddress="#/letter" linkName="Letter" />
        <Link linkAddress="#/xstate" linkName="XState" />
      </div>
    </div>
  );
};
