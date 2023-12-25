import React from "react";

export default function Nav() {
  return (
    <header>
      <nav className="bg-blue-50">
        <span className="home">Home</span>
        <span className="list">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </span>
      </nav>
    </header>
  );
}
