import React from "react";

export default function Menu(props) {

  function menuClick(event) {
    let name = event.target.name;
    let menuGrid = document.getElementById("gridMenu1");
    let menuGrid2 = document.getElementById("gridMenu2");
    let menuGrid5 = document.getElementById("gridMenu5");
    let container = document.getElementById("grid-container");
    if (name === "home") {
      menuGrid.style.display = "none";
      menuGrid2.style.display = "none";
      menuGrid5.style.display = "block";
      container.style.display = "block";
    } else if (name === "myTasks") {
      menuGrid.style.display = "none";
      menuGrid2.style.display = "block";
      menuGrid5.style.display = "none";
      container.style.display = "block";
    }
  }


  return (
    <div id={props.id}>
      <div className="menuItem">
        <button className="mainButton" onClick={menuClick} name="home">
          Home
        </button>

        <button className="mainButton" onClick={menuClick} name="myTasks">
          My tasks
        </button>
      </div>
    </div>
  );
}
