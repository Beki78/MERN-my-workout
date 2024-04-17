import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="p-6 pl-16 bg-slate-100">
      <Link to="/">
        <h1 className="text-4xl font-mono">My Workout</h1>
      </Link>
    </div>
  );
}

export default NavBar
