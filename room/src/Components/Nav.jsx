import React from "react";

export default function Nav() {
  return (
    <header>
      <nav className="bg-blue-50 flex flex-row justify-start gap-[1.5rem] p-[1.5rem]">
        <span className="home">Home</span>
        <span className="list">
          <ul className="flex flex-row justify-start gap-[0.75rem]">
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
