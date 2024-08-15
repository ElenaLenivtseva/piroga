import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductAsync } from '../features/productsSlice'

const ProductAdmin = ({product}) => {
    const dispatch = useDispatch()
  return (
    <div>
      <div>
        <img src={product.img} alt={product.title} />
      </div>
      <div>
        <p>{product.categoryName}</p>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <div>
          Состав:
          {Array.isArray(product.composition)?product.composition.map((item,index)=>{
            return (<p key={index}>{item}</p>)
          }):<p>Загрузка</p>}
        </div>
        <div>
          <p>Белки: {product.proteins}</p>
          <p>Жиры: {product.fat}</p>
          <p>Углеводы: {product.carbo}</p>
        </div>
        <p>Углеводы: {product.calories}</p>
        <p>Цена: {product.price}</p>
        <p>Вес: {product.weight}</p>
        <button onClick={()=>dispatch(deleteProductAsync(product.id))}>Удалить</button>
      </div>
    </div>
  )
}

export default ProductAdmin
