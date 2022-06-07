import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EntryPage from './EntryPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <EntryPage />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









for routing
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Home from './Home';
// import reportWebVitals from './reportWebVitals';

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import Page1 from './Page1';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <Home />
//   // </React.StrictMode>

//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/page1" element={<Page1 />} />
//       {/* <Route path="/page2" element={<Page2 />} />
//       <Route path="/page3" element={<Page3 />} />
//       <Route path="/page4" element={<Page4 />} /> */}
//     </Routes>
//   </BrowserRouter>,
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




for routing external url
const imageClick = () => 
{
   setIsClicked(true);
   window.location.href = "http://neodash.graphapp.io/";
}





adding footer

import React from "react";
import "./style.css";

const Footer = () => (
  <div className="footer">
    <p> © 2022 ************************ </p>
  </div>
);

export default Footer;


footer{
  padding-left: 10px;
  text-align: right;
  background-color: rgb(1, 1, 94);
  margin-top: 3rem;
  padding: .15rem;
  /* background-color: rgb(235, 195, 64); */
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}




//for providing sso login


{
  "ssoEnabled": true,
  "ssoDiscoveryUrl": "http://localhost:7474/browser/",
  "standalone": true,
  "standaloneProtocol": "bolt",
  "standaloneHost": "localhost",
  "standalonePort": "7687",
  "standaloneDatabase": "ardhi44",
  "standaloneDashboardName": "**",
  "standaloneDashboardDatabase": "**",
  "standaloneDashboardURL": ""
}