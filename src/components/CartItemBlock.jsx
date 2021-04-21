import React from 'react';
import style from '../scss/cartItemBlock.module.scss';

function CartItemBlock(props) {
    const handleRemoveClick = () => {
        props.onRemove(props.id);
    }
    const handlePlusItem = () => {
        props.onPlus(props.id);
    }
    const handleMinusItem = () => {
        props.onMinus(props.id);
    }

    return (
            <div className={style.product}>
                <img src={props.img} alt="product"/>
                <div className={style.product_info}>
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                </div>
                <button className={`${style.btn} ${style.plus}`} onClick={handlePlusItem}><span>+</span></button>
                <p className={style.total_count}> {props.totalCount}</p>
                <button className={`${style.btn} ${style.minus}`} onClick={handleMinusItem}><span>-</span></button>
                <p className={style.totalPrice}> {props.totalPrice}₽ </p>
                <button className={`${style.btn} ${style.delete}`} onClick={handleRemoveClick}> Удалить товар</button>
            </div>
    )
}

export default CartItemBlock