import React from 'react'
import "./Portfolio.css"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link className='nav-list' to="/">Works</Link>
                </li>
                <li>
                    <Link className='nav-list' to="/blog">Blog</Link>
                </li>
                <li>
                    <Link className='nav-list' to="">Contact</Link>
                </li>
            </ul>
        </nav>

    )
}

export default Header
