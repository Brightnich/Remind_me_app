import React from "react";

function Header(props) {
  function handleButtonClick() {
    let menuGrid = document.getElementById("gridMenu1");
    let container = document.getElementById("grid-container");
    let menu = document.getElementById("menu");
    if (menuGrid.style.display === "block") {
      menuGrid.style.display = "none";
      container.style.display = "block";
      menu.style.display = "none";
    } else {
      container.style.display = "grid";
      menuGrid.style.display = "block";
      menu.style.display = "block";
    }
  }

  return (
    <div className="header">
      <button className="menuButton" id={props.id} onClick={handleButtonClick}>
        Menu
      </button>
      <h1> Reminder App </h1>
    </div>
  );
}

export default Header;
