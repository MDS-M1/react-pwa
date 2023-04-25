import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header: React.FC = () => (
  <header>
    <div className="header--content">
      <h1>React PWA</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  </header>
);
