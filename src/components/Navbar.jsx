import React, { useCallback, useEffect } from 'react'

function Navbar() {

  const hidemenubar = () =>{
    document.getElementById("addclass").style="display:none";
  }
 const showmenubar = ()=>{
   document.getElementById("addclass").style="display:block";
 }
 setInterval(()=>{
  if(window.innerWidth > 1000 && window.scrollY >= 142){
    document.querySelector('.navbar').style="padding:1vh 0";
    document.querySelector('.imagebar').style="height:auto"
  }else if(window.innerWidth < 1000){
    document.querySelector('.navbar').style="auto";
    document.querySelector('.imagebar').style="height:2vh"
  }
  else{
    document.querySelector('.navbar').style="auto";
    document.querySelector('.imagebar').style="height:7vh"
  }
 },100)
  

  return (
    <>
      <div className='navbar row bg-white'>
        <div className='col-lg-4 col-xs-12 px-sm-4 px-lg-2 d-flex justify-content-between imagebar align-items-center '>
          <img  src='./images/logo.png'alt=''/>
          <i className="fa-solid fa-bars showmenuicon d-lg-none"onClick={showmenubar}></i>
        </div>
      

       
        <div className="navitems1  col-lg-8 align-items-center " id="addclass"onClick={hidemenubar}>
            <ul className='d-lg-flex m-0 p-0 w-100 justify-content-between overflow-hidden incheight' id='incheight'>
                <li>Templatess</li>
                <li>UI kits</li>
                <li>Design System</li>
                <li>Bundle</li>
                <li>Freebies</li>
                <li>Blog</li>
                <li>Help</li>
            </ul>
        </div>
      
      </div>
    </>
  )
}

export default Navbar
