import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home({ login }) {

    let navigate = useNavigate()

    return (

        <div>
            <p>This is The Home Page</p>
            <button onClick={() => {
                login();
                navigate('/dashboard')
            }} >Login</button>
            {/* {location.state} */}
        </div>

    )

}

export default Home 