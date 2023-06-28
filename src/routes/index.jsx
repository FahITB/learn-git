import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
// Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import { useState } from 'react'

const RoutesComponent = () => {
    const [loggedIn, setLoggedIn] = useState(null)

    function handleLogin() {
      setLoggedIn(true)
    }
    function handleLogout() {
      setLoggedIn(false)
    }
  
    console.log(loggedIn)
    let activeClassName = "nav-active"

    return <div>
        <header>
            <h1>Hello World</h1>
        </header>
        <nav className='nav'>
            <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined} >Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName : undefined}  >About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : undefined}  >Contact</NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeClassName : undefined}  >dashboard</NavLink>
        </nav>

        <Routes>
            <Route path='/' element={loggedIn ? <Navigate to="/dashboard" /> : < Home login={handleLogin} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dashboard' element={loggedIn ? <Dashboard logout={handleLogout} /> : <Navigate to="/" state={"From Dashboard"} />} />
            <Route path='settings' element={<p>This is the nested settings route</p>}>
            </Route>
            <Route path='/profile'>
                <Route path=':userId' element={<Profile />} />
            </Route>
            <Route path='/*' element={<Error />} />
        </Routes>
    </div>
}
export default RoutesComponent;