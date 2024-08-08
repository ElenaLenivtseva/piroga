import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='productCard'>
      <img src={product.img} alt={product.title}/>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.weight}</p>
      <p>{product.amountInCart>0?'В корзине':'Добавить в корзину'}</p>
    </div>
  )
}

export default ProductCard
