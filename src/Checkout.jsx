import React from 'react'
import { useStateValue } from './StateProvider'
import ad_banner from "./images/ad_banner.jpg";
import "./Checkout.css";
import Header from "./Header";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";


const Checkout = () => {
const [{basket}] = useStateValue();
  return (
    <>
    <Header/>
    <div className="checkout">
        <div>
        <img className="checkout__ad" src={ad_banner} alt=""/>
        {basket?.length === 0 ?(
            <div>
                <h2>Your Shopping Basket is empty</h2>
            </div>

        ):(
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {basket.map(item=>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        )}
        </div>
        {basket.length>0 &&(
            <div className="checkkout__right">
                <h1>Subtotal</h1>
                <Subtotal/>
            </div>

        )}
        
    </div>
    </>
  )
}

export default Checkout