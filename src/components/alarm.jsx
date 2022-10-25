import React, { useState, useEffect } from "react";

export default function Alarm(props) {
  const [alarm, setAlarm] = useState({
    note: "",
    alarmTime: ""
  });
  const [errors, setErrors] = useState({});
  const [tone, setTone] =  useState(null);
  const [isSubmit, setIsSubmit] = useState(false)

  function getAudio(event){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setTone(reader.result)
  };
}
  function handleChange(event){
    const { name, value } = event.target;
    setAlarm( prev => { return {...prev, [name]: value}});
  }
  function handleClick(event){
    event.preventDefault();
    setErrors(validate(alarm));
    setIsSubmit(true);
  }
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmit) {
      transfer(alarm, tone);
    }
  }, [errors]);
  function validate(values){
    const errors = {};
    if (!values.note) {
      errors.note = "Please tell us your plan";
    }
    if (!values.alarmTime) {
      errors.alarmTime = "This is important";
    }
    return errors;
  }
  function transfer( call, sound ){

    props.onAdd( call, sound )
    setAlarm({
      note: "",
      alarmTime: ""
    });
    setIsSubmit(false);
  }
  return(
    <div>
      <form>
        <textarea
          onChange={handleChange}
          rows="3"
          cols="30"
          name="note"
          value={alarm.note}        />
          <p style= {{color: "red"}}> {errors.note} </p>
        <input
          onChange={handleChange}
          type="datetime-local"
          name="alarmTime"
          value={alarm.alarmTime}
        />
        <p style= {{color: "red"}}> {errors.alarmTime} </p>
        <label className="custom-file-upload">
          <input type="file" accept = "audio/*" onChange ={getAudio} />
            Sound
        </label>        
        <button className="button" onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}