// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
// import { Toaster } from "react-hot-toast";
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <GoogleReCaptchaProvider
//       reCaptchaKey="6LcaAoIsAAAAAOo29_EGqS9mIXb2c5y74Nz49dAj"
//       scriptProps={{
//         async: true,
//         defer: true,
//         appendTo: "head"
//       }}
//     >
//       <App />
//       <Toaster position="top-right" reverseOrder={false} />
//     </GoogleReCaptchaProvider>
//   </StrictMode>
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The Provider was removed from here to enable Lazy Loading in Contact.jsx */}
    <App />
    <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>
)