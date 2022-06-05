import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link, Route, Router, useNavigate} from 'react-router-dom';
import "./style.css";



function Page1() {
    const [isClicked, setIsClicked] = useState(false);
  // React States
  const navigate= useNavigate();
  const imageClick = () => 
 {
    setIsClicked(true);
 }
 const renderForm = (
    
   <div> click on image</div>
  
  );
  
  return (
    <div className="page1">
    <t>TITLE</t>  
    <div className="page1_image" id="pi">                                                                        
      <img src="cafe1.png" height="700px" width="900px"  onClick={() => imageClick()}/>
    </div>
    {isClicked? navigate('/Page2'):renderForm}
    <t1>  <input type="submit"  name="view Dashboard"/></t1>
    </div>
   
  );
}

export default Page1;