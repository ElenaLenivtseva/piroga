import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product, category}) => {
  return (
    <div className='productCard'>
    <Link to={`/categories/${product.category}/${product.id}`}>
      <img src={product.img} alt={product.title}/>
      <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.weight}</p>
      </div>
      </Link>
      <p>{product.amountInCart>0?'В корзине':'Добавить в корзину'}</p>
    </div>
  )
}

export default ProductCard
