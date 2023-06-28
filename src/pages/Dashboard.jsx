import React from 'react'
import { Outlet , Link } from 'react-router-dom'
function Dashboard({ logout }) {
  return (
    <div>
        <h2>Dashboard</h2>
        <Link to="settings">settings</Link>
        <Outlet />
        <p>Welcome User</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard