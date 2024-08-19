import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductAsync } from "../features/productsSlice";
import { Link } from "react-router-dom";

const ProductAdmin = ({ product }) => {
  const dispatch = useDispatch();
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
          {Array.isArray(product.composition) ? (
            product.composition.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          ) : (
            <p>Загрузка</p>
          )}
        </div>
        <div>
          <p>Белки: {product.proteins}</p>
          <p>Жиры: {product.fat}</p>
          <p>Углеводы: {product.carbo}</p>
        </div>
        <p>Калории: {product.calories}</p>
        <p>{`Цена: ${product.price} руб`}</p>
        <p>{`Вес: ${product.weight} кг`}</p>
        {product.id ? (
          <>
          <button onClick={() => dispatch(deleteProductAsync(product.id))}>
            Удалить
          </button>
          
          <Link to={`/update/${product.id}`}>Редактировать</Link>
        </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductAdmin;
