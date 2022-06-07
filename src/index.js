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







/////////////////////////////////////ssoutil


import React, { useEffect, useState } from 'react'
import { authRequestForSSO } from 'neo4j-client-sso'
import { getDiscoveryDataInfo } from './SSOUtils'
import { Button } from '@material-ui/core'
import SecurityIcon from '@material-ui/icons/Security';


export const SSOLoginButton = ({discoveryAPIUrl, onSSOAttempt}) => {
    // const [savedSSOProviders, setSSOProviders] = useState([])
    const savedSSOProviders=[{
        "issuer": "https://trial-3652397.okta.com/oauth2/default",
        "authorization_endpoint": "https://trial-3652397.okta.com/oauth2/default/v1/authorize",
        "token_endpoint": "https://trial-3652397.okta.com/oauth2/default/v1/token",
        "userinfo_endpoint": "https://trial-3652397.okta.com/oauth2/default/v1/userinfo",
        "registration_endpoint": "https://trial-3652397.okta.com/oauth2/v1/clients",
        "jwks_uri": "https://trial-3652397.okta.com/oauth2/default/v1/keys",
        "response_types_supported": [
            "code",
            "id_token",
            "code id_token",
            "code token",
            "id_token token",
            "code id_token token"
        ],
        "response_modes_supported": [
            "query",
            "fragment",
            "form_post",
            "okta_post_message"
        ],
        "grant_types_supported": [
            "authorization_code",
            "implicit",
            "refresh_token",
            "password",
            "urn:ietf:params:oauth:grant-type:device_code"
        ],
        "subject_types_supported": [
            "public"
        ],
        "id_token_signing_alg_values_supported": [
            "RS256"
        ],
        "scopes_supported": [
            "openid",
            "profile",
            "email",
            "address",
            "phone",
            "offline_access",
            "device_sso"
        ],
        "token_endpoint_auth_methods_supported": [
            "client_secret_basic",
            "client_secret_post",
            "client_secret_jwt",
            "private_key_jwt",
            "none"
        ],
        "claims_supported": [
            "iss",
            "ver",
            "sub",
            "aud",
            "iat",
            "exp",
            "jti",
            "auth_time",
            "amr",
            "idp",
            "nonce",
            "name",
            "nickname",
            "preferred_username",
            "given_name",
            "middle_name",
            "family_name",
            "email",
            "email_verified",
            "profile",
            "zoneinfo",
            "locale",
            "address",
            "phone_number",
            "picture",
            "website",
            "gender",
            "birthdate",
            "updated_at",
            "at_hash",
            "c_hash"
        ],
        "code_challenge_methods_supported": [
            "S256"
        ],
        "introspection_endpoint": "https://trial-3652397.okta.com/oauth2/default/v1/introspect",
        "introspection_endpoint_auth_methods_supported": [
            "client_secret_basic",
            "client_secret_post",
            "client_secret_jwt",
            "private_key_jwt",
            "none"
        ],
        "revocation_endpoint": "https://trial-3652397.okta.com/oauth2/default/v1/revoke",
        "revocation_endpoint_auth_methods_supported": [
            "client_secret_basic",
            "client_secret_post",
            "client_secret_jwt",
            "private_key_jwt",
            "none"
        ],
        "end_session_endpoint": "https://trial-3652397.okta.com/oauth2/default/v1/logout",
        "request_parameter_supported": true,
        "request_object_signing_alg_values_supported": [
            "HS256",
            "HS384",
            "HS512",
            "RS256",
            "RS384",
            "RS512",
            "ES256",
            "ES384",
            "ES512"
        ],
        "device_authorization_endpoint": "https://trial-3652397.okta.com/oauth2/default/v1/device/authorize",
        "pushed_authorization_request_endpoint": "https://trial-3652397.okta.com/oauth2/default/v1/par"
    }]
    // useEffect(() => {
    //     getDiscoveryDataInfo(discoveryAPIUrl)
    //         .then(mergedSSOProviders => setSSOProviders(mergedSSOProviders))
    //         .catch(err =>
    //             console.error('Error in getDiscoveryDataInfo of Login component', err)
    //         )
    // }, [])

   
    // return (
    //     <>
    //         {savedSSOProviders?.length ? (
    //             savedSSOProviders.map(provider => (
    //                 <Button key={provider.id} style={{ float: "right", marginTop: "20px", marginBottom: "20px", backgroundColor: "white" }} onClick={() => {
    //                     // const selectedSSOProvider = savedSSOProviders.find(
    //                     //     ({ id }) => id === provider.id
    //                     // )
    //                     const selectedSSOProvider=savedSSOProviders[0];
    //                     onSSOAttempt();
    //                     authRequestForSSO(selectedSSOProvider);
    //                 }}
    //                     color="default"
    //                     variant="contained"
    //                     size="large"
    //                     endIcon={<SecurityIcon />}>
    //                     Sign in
    //                     {/* {provider.name} */}
    //                 </Button>

    //             ))
    //         ) : (
    //             <div>
    //                 <p>No SSO providers found or present. Make sure that config.json contains a correct discovery URL. 
    //                     This is currently set to <a href={discoveryAPIUrl}>{discoveryAPIUrl}</a><div className=""></div></p>
    //             </div>
    //         )}
    //     </>
    // )






    return (
        <>
            {savedSSOProviders?.length ? (
                savedSSOProviders.map(provider => (
                    <Button key={provider.id} style={{ float: "right", marginTop: "20px", marginBottom: "20px", backgroundColor: "white" }} onClick={() => {
                        // const selectedSSOProvider = savedSSOProviders.find(
                        //     ({ id }) => id === provider.id
                        // )
                        const selectedSSOProvider=savedSSOProviders[0];
                        onSSOAttempt();
                        authRequestForSSO(selectedSSOProvider);
                    }}
                        color="default"
                        variant="contained"
                        size="large"
                        endIcon={<SecurityIcon />}>
                        Sign in
                        {/* {provider.name} */}
                    </Button>

                ))
            ) : (
                <div>
                    <p>No SSO providers found or present. Make sure that config.json contains a correct discovery URL. 
                        This is currently set to <a href={discoveryAPIUrl}>{discoveryAPIUrl}</a><div className=""></div></p>
                </div>
            )}
        </>
    )







}