import  { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/cartContext';

function Header() {
    const cart = useContext(CartContext)
    return (
        <header style={{ 'position': 'sticky' }}>
            <Link className="logo" to="/">
                Buy MeShop
            </Link>
            <Link to="/cart">
                <AiOutlineShoppingCart className="shop-icon" />
                <span>{cart.UserCart.length}</span>
            </Link>
        </header>
    )
}

export default Header;
