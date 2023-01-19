import React from 'react'
import { Link } from 'react-router-dom'

export const Layout = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/create">Add User</Link>
                </li>
            </ul>
        </nav>
    )
}
