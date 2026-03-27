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