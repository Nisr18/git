import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

function Products() {
  return (
    <div>Products
        <nav>
            <NavLink to="features">Features</NavLink>
            <NavLink to="new">New</NavLink>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}

export default Products