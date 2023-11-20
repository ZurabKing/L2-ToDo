import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div>LOGO</div>
      <nav>
        <ul className="list">
          <li>Планы</li>
          <li>
            <button className="out-btn">Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
