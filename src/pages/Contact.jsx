import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div>
        <p>This is The Contact Page</p>
        <Link to="/" state={"From Contact Page"}>Back To Home Page</Link> 
    </div>
  )
}

export default Contact