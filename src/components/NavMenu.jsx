import React from 'react'
import { Link } from 'react-router-dom';
import style from '../scss/navMenu.module.scss'

function NavMenu(props) {
    return (
        <div className={props.visibleTab? `${style.nav_menu} ${style.visible}`: `${style.nav_menu} ${style.hidden}`} 
            onMouseLeave={props.onMouseLeave} 
            onMouseEnter={props.onMouseEnter} 
        >
            <nav>
                <ul>
                {props.items.map((nume, index) => (
                    <li key={index}>
                        <Link to={props.paths[index]}>
                            {nume}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu;
