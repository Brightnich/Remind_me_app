import React from "react"

export default function Stop(props){
  function handleClick(){
    props.stop();
  }
  return(
    <div id = "overViewPage" className="overView">
      <button id= "animate-button" onClick={handleClick}> Stop </button>
    </div>
  )
}