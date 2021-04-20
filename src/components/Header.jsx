import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavMenu, Categories, BurgerMenu } from '.';

import logo from '../assets/logo.svg'
import style from '../scss/header.module.scss'

function Header(props) {
    const scren = window.innerWidth <= 1170;
    const Count = useSelector(state => state.cart.totalCount);
    const Price = useSelector(state => state.cart.totalPrice);

    const [visibleMenu, setVisibleMenu] = React.useState(false);
    const [visibleRolls, setVisibRolls] = React.useState(false);
    const [visibleDop, setVisibDop] = React.useState(false); 

    const hidenNavMenu = () =>{
        setVisibRolls(false)
        setVisibDop(false)
    }

    const vRolls = () => {setVisibRolls(true); setVisibDop(false)}
    const vDop = () => {setVisibRolls(false); setVisibDop(true)}

    return (
        <>
        <header>
            <div className={style.header}>
                <div className={style.wrapper}>
                    {scren && 
                        <div className={style.burger_wrapper}>
                            <div className={visibleMenu? `${style.container} ${style.change}` : style.container} 
                                onClick={() => setVisibleMenu(!visibleMenu)}>
                                <div className={style.bar1}></div>
                                <div className={style.bar2}></div>
                                <div className={style.bar3}></div>
                            </div> 
                            <BurgerMenu items = {[ {value: "Суши", href: "/"}, 
                                {value: "Роллы", href: "/rolls"}, 
                                {value: "Ассорти", href: "/assorted"}, 
                                {value: "Закуски и салаты", href: "/snacks_and_salads"}, 
                                {value: "Еще", href: "/more"} ]} 
                                active={visibleMenu} 
                                setActiv={() => setVisibleMenu(!visibleMenu)}
                            />
                        </div>
                    }
                    <Link to="/">
                        <div className={style.logo}>
                            <div className={style.logo_img}>
                                <img src={logo} alt="" />
                            </div>
                            <div className={style.logo_block}>
                                <h1>SussshiSunse</h1>
                            </div>
                        </div>
                    </Link>
                    {!scren &&
                        <Categories items={["Суши","Роллы","Ассорти","Закуски и салаты","Еще"]} 
                                    paths={["/","/rolls","/assorted","/snacks_and_salads","/more"]}
                                    onMouseLeave={hidenNavMenu}
                                    onMouseEnter={[hidenNavMenu,
                                                    vRolls,
                                                    hidenNavMenu,
                                                    hidenNavMenu,
                                                    vDop]}
                        /> 
                    }
                    <div className={style.cart}>
                        <Link to="/Cart">
                            <button onClick={() => setVisibleMenu(false)}>
                                {Price} ₽ | {Count} <svg id="Layer_1" enableBackground="new 0 0 512.003 512.003" height="32" viewBox="0 0 512.003 512.003" width="32" xmlns="http://www.w3.org/2000/svg" >
                                                        <g><path d="m503.995 105.373c-6.868-8.498-17.076-13.371-28.004-13.371h-390.254l-3.485-24.976c-2.468-17.686-17.796-31.024-35.655-31.024h-30.597c-8.836 0-16 7.164-16 16s7.164 16 16 16h30.597c1.984 0 3.688 1.482 3.961 3.447l43.189 309.529c2.468 17.687 17.796 31.024 35.655 31.024h17.349c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h85.504c-1.776 5.008-2.752 10.391-2.752 16 0 26.467 21.533 48 48 48s48-21.533 48-48c0-5.609-.976-10.992-2.752-16h34.753c8.836 0 16-7.164 16-16s-7.164-16-16-16h-318.597c-1.984 0-3.688-1.482-3.961-3.447l-3.984-28.553h315.102c16.858 0 31.663-11.965 35.205-28.458l39.429-183.997c2.291-10.681-.333-21.679-7.199-30.174zm-295.995 322.629c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm176 0c0 8.822-7.178 16-16 16s-16-7.178-16-16 7.178-16 16-16 16 7.177 16 16zm95.905-299.163-39.428 183.993c-.394 1.836-2.042 3.169-3.917 3.169h-319.568l-26.79-192h385.788c1.583 0 2.569.808 3.117 1.486.547.677 1.129 1.808.798 3.352z"/></g>
                                                    </svg>
                            </button>
                        </Link> 
                    </div>
                </div>
            </div>
            <NavMenu items={["Hot роллы", "Роллы"]}
                    paths = {["/hot-rolls","/rolls-rolls"]} 
                    onMouseLeave={hidenNavMenu} 
                    onMouseEnter={() => setVisibRolls(true)} 
                    visibleTab={visibleRolls}
            />
            <NavMenu items={["Напитки","Дополнительно"]}
                    paths = {["/drinks","/dop"]} 
                    onMouseLeave={hidenNavMenu} 
                    onMouseEnter={() => setVisibDop(true)}  
                    visibleTab={visibleDop}
            />
        </header>
        </>
    );
}


export default Header