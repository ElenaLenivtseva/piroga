import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSliderAsync,
  addImgAsync,
  deleteImgAsync,
} from "../features/sliderSlice";

const initialForm = {
  url: "",
  alt: "",
};

const AdminSlider = () => {
  const dispatch = useDispatch();
  const [ form, setForm ] = useState(initialForm);
  const [ modal, setModal ] = useState(false);

  useEffect(() => {
    dispatch(getSliderAsync());
  }, [dispatch]);

  const slider = useSelector((state) => state.slider);
  function handleAddImg(e) {
    e.preventDefault();
    dispatch(addImgAsync(form));
    setForm(initialForm);
    setModal(false);
  }
  return (
    <div>
      <h3>Все изображения</h3>
      <button onClick={() => setModal(true)}>Добавить новое фото</button>
      {modal ? (
        <div>
            <p onClick={() => setModal(false)}>X</p>
          <form>
            <label>
              Ссылка на изображение
              <input
                type="text"
                placeholder="http/pirog.png"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
              />
            </label>
            <label>
              Описание для изображения (будет отображено, если само фото не
              загрузится)
              <input
                type="text"
                placeholder="Пирог с малиной"
                value={form.alt}
                onChange={(e) => setForm({ ...form, alt: e.target.value })}
              />
            </label>
            <button onClick={handleAddImg}>Добавить</button>
          </form>
          
        </div>
      ) : null}
      <div>
            {slider.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.url} alt={item.alt} />
                  <button onClick={() => dispatch(deleteImgAsync(item.id))}>
                    Удалить
                  </button>
                </div>
              );
            })}
          </div>
    </div>
  );
};

export default AdminSlider;
