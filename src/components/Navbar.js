import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
    const na=({isActive})=>{
        if(isActive){
            return{
                textDecoration:'none',
                color:'red',
                fontWeight:'bold'
            }
        }
        
    }
  return (
    <div>
        <nav>
        <NavLink style={na} to="/">Home</ NavLink>
        <NavLink style={na} to="/about">About</ NavLink>
        <NavLink style={na} to="/products">Products</ NavLink>
      </nav>
    </div>
  )
}

export default Navbar