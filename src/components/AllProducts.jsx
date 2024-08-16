import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "../features/productsSlice";
import ProductAdmin from "./ProductAdmin";
import { nanoid } from "nanoid";

const initialProduct = {
  id: "",
  category: "",
  categoryName: "",
  title: "",
  img: "",
  composition: [
    
  ],
  calories: 0,
  proteins: 0,
  fat: 0,
  carbo: 0,
  expiration: 0,
  description: "",
  price: 0,
  totalPrice: 0,
  weight: 0,
  amountInCart: 0}

const AllProducts = () => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false)
  const [form,setForm] = useState(initialProduct)

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products.allProducts);
  let id = nanoid()
  return (
    <div>
      <button onClick={()=>setAdd(true)}>Добавить новый товар</button>
      {add?<div>
        <p onClick={()=>setAdd(false)}>X</p>
      <form>
        <input type="text" placeholder="Категория EN" onChange={(e)=>{setForm({...form, category: e.target.value})}}/>
        <input type="text" placeholder="Категория RU" onChange={(e)=>{setForm({...form, categoryName: e.target.value})}}/>
        <input type="text" placeholder="Название товара" onChange={(e)=>{setForm({...form, title: e.target.value})}}/>
        <input type="text" placeholder="Ссылка на изображение" onChange={(e)=>{setForm({...form, img: e.target.value})}}/>
        <input type="text" placeholder="Состав: перечисляйте продукты через запятую"/>
        <input type="number" placeholder="Калории на 100 г" onChange={(e)=>{setForm({...form, calories: e.target.value})}}/>
        <input type="number" placeholder="Белки на 100 г" onChange={(e)=>{setForm({...form, proteins: e.target.value})}}/>
        <input type="number" placeholder="Жиры на 100 г" onChange={(e)=>{setForm({...form, fat: e.target.value})}}/>
        <input type="number" placeholder="Углеводы на 100 г" onChange={(e)=>{setForm({...form, carbo: e.target.value})}}/>
        <input type="number" placeholder="Срок годности в часах" onChange={(e)=>{setForm({...form, expiration: e.target.value})}}/>
        <textarea placeholder="Описание товара" onChange={(e)=>{setForm({...form, description: e.target.value})}}></textarea>
        <input type="number" placeholder="Вес в кг" onChange={(e)=>{setForm({...form, weight: e.target.value})}}/>
        <input type="number" placeholder="Цена в рублях" onChange={(e)=>{setForm({...form, price: e.target.value})}}/>
        <button onClick={(e)=>{
          e.preventDefault()
          setForm({...form, id: id})
          setForm({...form, id: id})
        }}>Добавить товар</button>
      </form></div>:null}
      
      <div>
        {allProducts.length > 0 ? (
          allProducts.map((product) => {
            return <ProductAdmin product={product} />;
          })
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
