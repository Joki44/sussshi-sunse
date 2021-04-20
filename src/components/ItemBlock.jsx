import React from 'react'
import style from '../scss/itemBlock.module.scss'

function ItemBlock(props) {
    const onAddItem = () =>{
        const obj = {
            img:props.img,
            name:props.name,
            price:props.price,
            id: props.id,
            description: props.description
        }
        props.onClickAddItem(obj)
    };
    
    return (
        <div className={style.item}>
            <img
                src={props.img}
                alt="product"
            />
            <div className={style.text_block}>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <h5>{props.price} ₽</h5>
                <button 
                    type="button"
                    onClick={onAddItem}
                >
                    В корзину
                </button>
            </div>
        </div>
    )
}

export default ItemBlock
