import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'; // Import the Home

function App() {

  return (
    <>
     <Home/>
     <footer
          style={{
            width: "100vw",
            backgroundColor: "#f5f5f5",
            padding: "17px 0px",
            textAlign: "center",
            fontSize: "14px",
            color: "#666",
            borderTop: "1px solid #ddd",
            position: "fixed",
            left: 0,
            bottom: 0,
            top: "auto",
          }}
        >
          © {new Date().getFullYear()} Dronix Eco System. All
          rights reserved.
        </footer>
    </>
  )
}

export default App
