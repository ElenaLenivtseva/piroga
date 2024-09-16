import React from "react";
import Slider from "react-slick";
import "./About.scss";

const numbers = [
  { title: "14+", descr: "лет на рынке" },
  { title: "5", descr: "уютных филиалов" },
  { title: "150", descr: "сотрудников" },
  { title: "300+", descr: "позиций в меню" },
  { title: "2000", descr: "продаж в день" },
  { title: "8400", descr: "испеченных пирожков в неделю" },
  { title: "40", descr: "доставок в день" },
];
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="about">
      <div className="about__banner">
        <img
          className="about__banner-img"
          src="https://53a7276f-d68f-462e-a2bf-df223e005be4.selstorage.ru/uploads/organization_common_photo/photo/4330/piroga_qr.png"
          alt="Новый филиал на Фрунзе 61"
        />
      </div>
      <div className="about__values">
        <div className="about__left">
          <h3 className="about__goal">
            Наша цель — проявить заботу о людях, производя вкусную и полезную
            продукцию для каждой семьи. Только свежее и натуральное.
          </h3>
        </div>
        <div className="about__right">
          <figure className="about__list-wrap">
            <figcaption className="about__list-title">Наши ценности</figcaption>
            <ul className="about__list">
              <li className="about__list-item">
                Мы уделяем особое внимание качеству и не используем добавки,
                улучшители вкуса, консерванты.
              </li>
              <li className="about__list-item">
                Наши начинки, джемы и варенья ежедневно готовятся собственными
                силами по авторским технологиям и только из натуральных
                ингредиентов.
              </li>
              <li className="about__list-item">
                Мы предлагаем широкий ассортимент свежей выпечки и кулинарии,
                произведенный с высоким уровнем качества, по доступной цене.
              </li>
            </ul>
          </figure>
        </div>
      </div>
      <div className="about__collage">
        <div className="about__photo-wrap">
          <img className="about__photo" src="https://53a7276f-d68f-462e-a2bf-df223e005be4.selstorage.ru/uploads/media/photo/3207562/905496fe-7a96-4a24-b5d0-803254516007.webp" alt="Пирог грушевый"/>
        </div>
        <div className="about__photo-wrap">
          <img className="about__photo" src="https://53a7276f-d68f-462e-a2bf-df223e005be4.selstorage.ru/uploads/media/photo/3207528/72388314-457e-4b97-886c-02317fb269fc.webp" alt="Торт Астория"/>
        </div>
        <div className="about__photo-wrap">
          <img className="about__photo" src="https://53a7276f-d68f-462e-a2bf-df223e005be4.selstorage.ru/uploads/media/photo/3207613/bcd78cd9-6881-4160-8e57-0bdb59236b92.webp" alt="Пирог Осетинский картофель/сыр"/>
        </div>
      </div>
      <div className="about__history">
        <h3 className="about__history-title"> Кафе-пекарня с историей:</h3>
        <p className="about__history-text">
          В 2009 году «Пирога» открыла свои двери для жителей города Томска и
          гостей города.
        </p>
        <p className="about__history-text">
          В 2012 году помимо горячей выпечки в ассортименте появились фирменные
          чизкейки с соусами из свежих ягод, карамельные торты, наполеон и
          изделия из песочного и слоеного теста.
        </p>
        <p className="about__history-text">
          В 2017 году открыли собственную службу доставки.
        </p>
        <p className="about__history-text">
          В 2018 году открылся второй филиал пекарни в Центре водных видов
          спорта «Звездный».
        </p>
        <p className="about__history-text">
          В 2021 году мы открыли филиал в торгово-развлекательном центре «Лето».
        </p>
        <p className="about__history-text">
          В 2022 году распахнули двери нового уютного кафе на Фрунзенском рынке.
        </p>
        <p className="about__history-text">
          В апреле 2024 года мы запустили юбилейный пятый филиал по адресу
          Фрунзе, 61 с необычным интерьером и возможностью взять с собой за
          угощениями и напитками ваших питомцев, ведь мы — dog-friendly :)
        </p>
      </div>
      <div className="about__numbers">
        <Slider {...settings}>
          {numbers.map((item, index) => {
            return (
              <div key={index} className="about__number-wrap">
                <div className="about__number-top">
                  <p className="about__number-title">{item.title}</p>
                </div>
                <div className="about__number-bottom">
                  <p className="about__number-descr">{item.descr}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="about__invent">
        <figure className="about__list-wrap">
          <figcaption className="about__list-title">Ждем в гости: </figcaption>
          <ul className="about__list">
            <li className="about__list-item">
              📍 Проспект Фрунзе, 61 (08:00-21:00) // Оставить отзыв о визите:
              <a href="https://go.2gis.com/1wgpb" className="about__link">
                https://go.2gis.com/1wgpb
              </a>
            </li>
            <li className="about__list-item">
              📍 Фрунзенский рынок, Комсомольский проспект, 58/1 (08:00-20:00) //
              Оставить отзыв о визите:{" "}
              <a href="https://go.2gis.com/3yc8g" className="about__link">
                https://go.2gis.com/3yc8g
              </a>
            </li>
            <li className="about__list-item">
              📍 «Звёздный» ЦВВС, Энтузиастов, 31 (08:00-21:00) // Оставить отзыв
              о визите:{" "}
              <a href="https://go.2gis.com/rpkup" className="about__link">
                https://go.2gis.com/rpkup
              </a>
            </li>
            <li className="about__list-item">
              📍 «Лето» ТЦ, Нахимова, 8,ст.13 (10:00-22:00) // Оставить отзыв о
              визите:{" "}
              <a href="https://go.2gis.com/r7ut6" className="about__link">
                https://go.2gis.com/r7ut6
              </a>
            </li>
            <li className="about__list-item">
              📍 Южный рынок, Нахимова, 15 (09:00-20:00) // Оставить отзыв о
              визите:{" "}
              <a href="https://go.2gis.com/g4row" className="about__link">
                https://go.2gis.com/g4row
              </a>
            </li>
          </ul>
        </figure>
      </div>
    </div>
  );
};

export default About;
