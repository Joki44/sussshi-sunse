import React from 'react'
import { Link } from 'react-router-dom';
import style from '../scss/burgerMenu.module.scss';

function BurgerMenu(props) {

    return (
        <div className={props.active ? `${style.burgerMenu} ${style.active}` : style.burgerMenu} onClick={() => {props.setActiv(false)}} >
            <div className={style.menu_content} >
                <ul>
                    {props.items.map(item => 
                        <li key={item.href}>
                            <Link to={item.href} className="link-router" onClick={() => {props.setActiv(false)}}>{item.value}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default BurgerMenu
