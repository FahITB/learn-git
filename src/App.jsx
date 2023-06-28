import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoutesComponent from './routes'
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent/>   
    </BrowserRouter>  
  )
}

export default App
