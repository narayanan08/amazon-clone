import React from 'react'
import amazon_logo from "./images/amazon_logo.png";
import {Link} from "react-router-dom";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import {useStateValue} from "./StateProvider";



const Header = () => {

  const [{ basket}] = useStateValue();
  return (
    <>
    <nav className='header'>

        <Link to="/">
          <img className="header__logo" 
          src={amazon_logo}></img>
        </Link>

        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon"></SearchIcon>
        </div>

        <div className="header__nav">
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className='header__optionLineOne'>Hello Badri</span>
              <span className='header__optionLineTwo'>Sign In</span>
            </div>
          </Link>

          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>

          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingCart/>
              <span className='header__optionLineTwo header_basketCount'>{basket?.length}</span>
            </div>
          </Link>
        </div>
        
        
    </nav>
    
    </>
  )
}

export default Header