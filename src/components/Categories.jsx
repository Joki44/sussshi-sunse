import React from 'react'
import { Link } from 'react-router-dom';
import style from '../scss/categories.module.scss'

function Categories(props) {
    return (
        <nav onMouseLeave={props.onMouseLeave} className={style.categories} >
            <ul>
                {props.items.map((i, index) => (
                    <li key={index} >
                        <Link to={props.paths[index]}
                            onMouseEnter={props.onMouseEnter[index]}
                        >
                            {i}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Categories
