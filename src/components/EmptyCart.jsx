import React from 'react'
import { useHistory } from 'react-router-dom';

import cartEmptyImg from '../assets/empty-cart.png';
import style from '../scss/emptyCart.module.scss'

function EmptyCart() {
    const history = useHistory();

    const hendleGoBack = () => {
        history.goBack()
    }

    return (
        <section className={style.empty_cart}>
                <h2>Корзина пустая 😕</h2>
                <p className="">
                    Вероятней всего, вы не заказывали ещё пиццу.<br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <div className={style.img}>
                    <img src={cartEmptyImg} alt="Empty cart" />
                </div>
                <button type="button" className="" onClick={hendleGoBack}> Вернуться назад</button>
        </section >
    )
}

export default EmptyCart
