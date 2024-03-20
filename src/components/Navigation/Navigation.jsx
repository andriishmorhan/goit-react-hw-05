import { NavLink } from 'react-router-dom'
import clsx from "clsx"
import css from "./Navigation.module.css"

const makeLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
}

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink to="/" className={makeLinkClass}
            >
                Home page
            </NavLink>
            <NavLink to="/movies" className={makeLinkClass}
            >
                Movies page
            </NavLink>
             <NavLink to="/movie" className={makeLinkClass}
            >
                Movie details page
            </NavLink>
      </nav>
    )
}

