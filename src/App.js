import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import ShowTime from "./components/showTime";
import Alarm from "./components/alarm";
import Mytask from "./components/mytask";
import Stop from "./components/stop";
import Twirling from "./Twirling";

function getLocalData() {
  let list = localStorage.getItem("items");
  if (list) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
}
export default function App() {
  const [reminder, setReminder] = useState(getLocalData());
  const [isTime, setIsTime] = useState(false);
  const elements = document.getElementsByClassName("container");

  function handleStop() {
    window.audio.pause();
    setIsTime(false);
  }
  function addAlarm(newAlarm, newTone) {
    if (newTone) {
      window.audio = new Audio(newTone);
    } else {
      window.audio = new Audio(Twirling);
    }
    let currentDate = new Date();
    let alarmDate = new Date(newAlarm.alarmTime);
    if (alarmDate > currentDate) {
      let alarmTimeout = alarmDate.getTime() - currentDate.getTime();
      setTimeout(() => {
        window.audio.play();
      }, alarmTimeout);
      alert("Alarm set at " + newAlarm.alarmTime);
      setTimeout(() => {
        setIsTime(true);
      }, alarmTimeout);
      setTimeout(() => {
        alert("Remember your plans(" + newAlarm.note + ") now!");
      }, alarmTimeout);
    }

    setReminder((prevValue) => {
      return [...prevValue, newAlarm];
    });
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(reminder));
  }, [reminder]);

  return (
    <div>
      <Header />
      <div id="grid-container">
        <div id="gridMenu1" className="grid-item">
          <Menu id="menu" />
        </div>
        <div id="gridMenu2" className="grid-item">
          {reminder.length === 0 ? (
            <Mytask note="Empty" />
          ) : (
            reminder.map((alarm, index) => {
              return <Mytask key={index} note={alarm.note} />;
            })
          )}
        </div>
        <div id="gridMenu5" className="grid-item">
          {isTime ? (
            (elements[0].style.display = "none" && <Stop stop={handleStop} />)
          ) : (
            <div className="container">
              <ShowTime />
              <Alarm onAdd={addAlarm} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
