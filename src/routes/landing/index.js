import React from 'react'
import './styles.css'

export default function Landing() {

  function addItem(){
    window.location.href = "/additem"
    console.log("Hello");
  }

  return (
    <div id="dashboard-wrapper" class="">
      <h1> Please add your item </h1>

       <div class="dashboard-list-container" >
        
          <div >
            Box
          </div>

          <div >
            Box
          </div>

          <div >
            Box
          </div>

       </div>

        <button id="add" onClick={addItem}> + </button>
        <button id="submit"> Submit </button>
    </div>
  )
}
