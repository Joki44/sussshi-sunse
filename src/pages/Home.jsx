import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/actions/cart'
import { ItemBlock } from '../components';

import style from '../scss/home.module.scss'

function Home(props) {
    const dispatch = useDispatch();
    
    const handleAddItemToCart = obj =>{
        dispatch(addItemToCart(obj));
    }
    
    return (
        <>
            <div className="indent"/>
            <main className={`${style.products} wrapper`}>
                {props.items.map(obj => 
                    <ItemBlock 
                        key={obj.id} 
                        id={obj.id} 
                        name={obj.name} 
                        img={obj.img} 
                        description={obj.description} 
                        price={obj.price} 
                        onClickAddItem={handleAddItemToCart} 
                    />)
                }
            </main>
        </>
    )
}

export default Home
