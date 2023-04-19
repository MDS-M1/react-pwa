import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header>
    <h1>React PWA</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </header>
);
