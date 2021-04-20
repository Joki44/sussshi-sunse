import React from 'react'
import { useSelector } from 'react-redux';
import {CartWithItems, EmptyCart} from '../components';

function Cart() {
    const { totalCount } = useSelector(({cart}) => cart);
    
    return (
    <main>
        <div className="wrapper">
            {totalCount ? (<CartWithItems></CartWithItems>) : (<EmptyCart></EmptyCart>)}
        </div>
    </main>
    )
}

export default Cart