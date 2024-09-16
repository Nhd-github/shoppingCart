import  { useContext } from "react";
import "./Cart.css";
import { AiFillStar, AiOutlineDelete } from "react-icons/ai";
import { CartContext } from "../Context/cartContext";

export default function Cart() {
  const context = useContext(CartContext)

  return (
    <>
      {context.UserCart.length ? ( // if shoppping cart is not empty
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button onClick={context.removeAll}>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {context.UserCart.map(product => (

              <div className="card" key={crypto.randomUUID()}>
                <img
                  src={product.image}
                  alt=""
                />
                <main>
                  <p>{product.title.slice(0, 15)}...</p>
                  <div className="card-details">
                    <div>
                      {Array(Math.ceil(product.rating.rate)).fill(0)
                        .map(() => <AiFillStar key={crypto.randomUUID()} style={{ color: "orange" }} />)}

                      {Array(5 - Math.ceil(product.rating.rate)).fill(0)
                        .map(() => <AiFillStar  key={crypto.randomUUID()} style={{ color: "silver" }} />)}

                    </div>
                    <p>{product.price}$</p>
                  </div>
                  <div className="product-count">
                    <p>{product.count}</p>
                  </div>
                  <button onClick={()=>context.removeProduct(product.id)}>Remove From Basket</button>
                </main>
              </div>
            ))}
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  );
}
