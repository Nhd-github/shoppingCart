import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
import Card from '../../Components/Card/Card'

function Home() {
  const context =useContext(CartContext)
  return (
    <>
    
    <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
     {context.shop.map(product=><Card {...product} key={product.id}/>)}
     
      </main>

    </>
  )
}

export default Home
