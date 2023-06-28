import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {

   let navigate = useNavigate()

  return (
    <div>
        <p>This is The About Page</p>
        <button onClick={() => navigate("/", { state:"From the About" })}>Redircet</button>
    </div>
    
  )
}

export default About