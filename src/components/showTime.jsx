import React, { useState } from "react";

function ShowTime() {
  const [clock, setClock] = useState(null);
  function format(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
  const date = new Date();
  let hour = format(date.getHours());
  let minute = format(date.getMinutes());
  let second = format(date.getSeconds());
  const time = hour + ":" + minute + ":" + second;
  function updateTime() {
    setClock(time);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="clock">
      <h1> {clock} </h1>
    </div>
  );
}

export default ShowTime;
