import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Main() {
  return (
    <main>
        <h3>Main</h3>
        <Link to={"/pug"}>Pug</Link>
        {` | `}
        <Link to={"/chi"}>Chi</Link>
    <br />
        <Outlet />
        
    </main>
  )
}

export default Main