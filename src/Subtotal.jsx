import React from 'react'
import {NumericFormat} from "react-number-format";
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider';
import "./Subtotal.css";
const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    const total = getBasketTotal(basket);
    return (
    <div className='subtotal'>
        <NumericFormat
        prefix={'$'}
        thousandSeparator=","
        allowNegative={false}
        value={total}
        decimalScale={2}
        customInput={(value)=>(
            <>
                <p>
                    Subtotal ({basket.length} items):<strong>{total}</strong>
                </p>
            </>
        )}
        />
        <button> Proceed to Pay </button>
    </div>
    )
}

export default Subtotal