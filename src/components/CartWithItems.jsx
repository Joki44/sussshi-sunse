import React from 'react'
import { CartItemBlock } from '../components';
import { useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';
import style from '../scss/cartWithItems.module.scss';

function CartWithItems() {
    const { totalCount, totalPrice, items } = useSelector(({cart}) => cart);
    const dispatch = useDispatch();
    const history = useHistory();

    const addedItems = Object.keys(items).map(key => {
        return items[key].items[0];
    });
    const onClearCart = () => {
        if (window.confirm('Вы действительно хотетие очистить корзину?')){
            dispatch(clearCart())
        }
    }
    const onRemoveItem = (id) => {
        if (window.confirm('Вы действительно хотетие удалить?')){
            dispatch(removeCartItem(id))
        }
    }
    const onPlusItem = (id) =>{
        dispatch(plusCartItem(id))
    }
    const onMinusItem = (id) =>{
        dispatch(minusCartItem(id))
    }

    const hendleGoBack = () => {
        history.goBack()
    }

    return (
        <section className={style.cart_with_items}>
            <h2 className={style.cart}>Корзина</h2>
            <h5 onClick={onClearCart} className={style.clear_cart}>Очистить корзину</h5>
            <div className={style.product}>
            {addedItems.map((obj) =>(
                <CartItemBlock 
                    key={obj.id}
                    id={obj.id}
                    img={obj.img}
                    name={obj.name} 
                    description={obj.description} 
                    price={obj.price} 
                    totalPrice={items[obj.id].totalPrice}
                    totalCount={items[obj.id].items.length}
                    onRemove={onRemoveItem}
                    onPlus={onPlusItem}
                    onMinus={onMinusItem}
                />))
            }
            </div>
            <h5 className={style.total_count}>
                Всего товаров: {totalCount}
            </h5>
            <h5 className={style.total_price}>
                Сумма заказа: {totalPrice} р 
            </h5>
            <button 
                className={`${style.btn} ${style.back}`} 
                onClick={hendleGoBack}
            > 
                Вернуться назад
            </button>
            <button className={`${style.btn} ${style.pay}`} onClick={() => alert("Оплата")}>
                Оплатить сейчас
            </button>
        </section >
    )
}

export default CartWithItems