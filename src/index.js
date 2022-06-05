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