import React from 'react'
import { useParams } from 'react-router-dom'
function Profile() {

    let { userId } = useParams()


  return (
    <div>
        <h2>Profile</h2>
        <p>The i of this user is {userId} </p>
    </div>
  )
}

export default Profile