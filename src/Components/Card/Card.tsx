import { useContext } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { ProductType } from '../Product.types'
import { CartContext } from '../../Context/cartContext'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'


function Card({ id, title, image, price, rating }: ProductType) {
    const navigate = useNavigate()
    const context = useContext(CartContext)
    const addToBasketHandler = () => {
        context.addProduct(id)
        swal({
            title: 'Product has been added to Basket',
            icon: 'success',
            buttons: ['Ok', 'Going to Basket']
        }).then(result => {
            console.log(result)
            if (result) {
                navigate('/cart')
            }
        })

    }
    return (
        <div className="card">
            <img
                src={image}
                alt=""
            />
            <main>
                <p>{title.slice(0, 15)}...</p>
                <div className="card-details">
                    <div>
                        {Array(Math.ceil(rating.rate)).fill(0)
                            .map(() => <AiFillStar key={crypto.randomUUID()} style={{ color: "orange" }} />)}

                        {Array(5 - Math.ceil(rating.rate)).fill(0)
                            .map(() => <AiFillStar key={crypto.randomUUID()} style={{ color: "silver" }} />)}

                    </div>
                    <p>{price}$</p>
                </div>
                <button onClick={addToBasketHandler}>Add to Basket</button>
            </main>
        </div>
    )
}

export default Card