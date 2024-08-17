import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addCategoryAsync,
  deleteCategoryAsync,
  getCategoriesAsync,
} from "../features/categoriesSlice";

const initialForm = {
  type: "",
  title: "",
  mainImg: "",
};
const AdminCategories = () => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [form, setForm] = useState(initialForm);

  function handleAddCategory() {
    console.log(form)
    dispatch(addCategoryAsync(form));
    setForm(initialForm)
    setAdd(false)
}
    
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <h2>Все категории</h2>
      <button onClick={() => setAdd(true)}>Добавить новую категорию</button>
      {add ? (
        <div>
          <p onClick={() => setAdd(false)}>X</p>
          <form>
            <label>
              Путь в URL EN. Будет отображаться в поисковой строке при переходе
              в данную категорию.
              <input type="text" placeholder="cheesecakes" value={form.type} onChange={(e)=>setForm({...form, type: e.target.value})}/>
            </label>
            <label>
              Название категории на русском. Будет отображаться непосредственно
              на сайте
              <input type="text" placeholder='Чизкейки' value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})}/>
            </label>
            <label>
                Главное изображение категории. Будет отображаться на главной странице сайта
              <input type="text" placeholder='https/cheesecake.jpg' value={form.mainImg} onChange={(e)=>setForm({...form, mainImg: e.target.value})}/>
            </label>
            <button onClick={handleAddCategory}>Добавить категорию</button>
          </form>
        </div>
      ) : null}

      <div>
        {categories.map((item) => {
          return (
            <div key={item.id}>
              <h4>Путь в URL EN: {item.type}</h4>
              <h4>Название RU: {item.title}</h4>
              <p>
                Путь на основное изображение: <br />
                <a href={item.mainImg}>{item.mainImg}</a>
              </p>
              <p>
                <b>
                  Предупреждение: вы удаляете только название категории. Оно не
                  будет в списке предложенных при создании нового товара. Товары
                  данной категории сохраняются. Чтобы удалить товары перейдите в
                  раздел товары.
                </b>
              </p>
              <button
                onClick={() => {
                  dispatch(deleteCategoryAsync(item.id));
                }}
              >
                Удалить категорию
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminCategories;
