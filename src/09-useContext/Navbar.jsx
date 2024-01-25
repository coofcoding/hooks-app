import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div
            className="navigation"
        >
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to="/login"
            >
                Login
            </NavLink>
        </div>
    )
}
