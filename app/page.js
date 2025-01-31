"use client";
"use client";

import Slider from "react-slick";
import {useState} from "react";
import Fancybox from './components/Fancybox';
import useProductStore from "@/app/stores/useProductStore";
import Popup from "@/app/components/ServicePopup";
import ServiceCard from "@/app/components/ServiceCard";

export default function Page() {
  const [popup, setPopup] = useState(false)
  const getProductsByCategory = useProductStore((state) => state.getProductsByCategory);
  const {service, cart, totalPrice} = useProductStore();
  const menProducts = getProductsByCategory("men");
  const womenProducts = getProductsByCategory("women");
  const bothProducts = getProductsByCategory("both");
  const addToCart = useProductStore((state) => state.addToCart);
  const removeFromCart = useProductStore((state) => state.removeFromCart);
  const [orderSent, setOrderSent] = useState(false)


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
  };
  return (
    <div>
      <div className="s1" id="s1">
        <div className="s1_bg_line">
          <img src="img/line.png" alt="line"/>
          <img src="img/line.png" alt="line"/>
        </div>
        <div className="wrapper">
          <div className="s1_items">
            <div className="s1_left">
              <h1>Массаж в Адлере</h1>
              <h2>
                Процедуры для тела и лица, программы для женщины, мужчины или
                двоих
              </h2>
              <div className="s1_btn btn_to">
                <a href="tel:+79965091011" className="btn">Позвонить</a>
              </div>
              <div className="s1_left_img">
                <img src="img/s1_1.png" alt="Массаж в спа салоне Адлера"/>
              </div>
            </div>
            <div className="s1_right">
              <img src="img/s1_img.png" alt="Массаж-цена в Адлере"/>
            </div>
          </div>
        </div>
      </div>
      <div className="s2" id="s2">
        <div className="s1_bg_line">
          <img src="img/line.png" alt="line"/>
          <img src="img/line.png" alt="line"/>
        </div>
        <div className="wrapper">
          <div className="s2_content">
            <div className="s2_rose">
              <img src="img/rose2.png" alt="Спа массаж в Адлере"/>
            </div>
            <h2>Виды программ</h2>
            <div className="subtitle">
              Если вы хотите удивить и обрадовать себя или того, кто вам
              небезразличен, посетите или вручите подарочный сертификат на массаж
              и spa-уходы для приятного отдыха в спа-салоне Адлера, который
              даст возможность испытать чудотворное действие древнейших
              оздоравливающих практик.
            </div>
            <div className="s2_items">
              <div className="s2_item">
                <div className="s2_item_img">
                  <div className="screen_img">
                    <img
                      src="img/s2_1.jpg"
                      alt="Массаж девушке в спа-салоне Адлера"
                    />
                  </div>
                </div>
                <div className="s2_item_title">Для женщин</div>
                <div className="s2_item_btn btn_to">
                  <a href="#s4" className="btn">Перейти</a>
                </div>
              </div>
              <div className="s2_item">
                <div className="s2_item_img">
                  <div className="screen_img">
                    <img
                      src="img/s2_2.jpg"
                      alt="Спа массаж для мужчины Адлера"
                    />
                  </div>
                </div>
                <div className="s2_item_title">Для мужчин</div>
                <div className="s2_item_btn btn_to">
                  <a href="#s5" className="btn">Перейти</a>
                </div>
              </div>
              <div className="s2_item">
                <div className="s2_item_img">
                  <div className="screen_img">
                    <img
                      src="img/s2_3.jpg"
                      alt="Спа-массаж для двоих в Адлере"
                    />
                  </div>
                </div>
                <div className="s2_item_title">Для двоих</div>
                <div className="s2_item_btn btn_to">
                  <a href="#s6" className="btn">Перейти</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="s3" id="s23">
        <div className="wrapper">
          <h2>Что вас ждёт в нашем салоне</h2>
          <div className="subtitle">
            Интерьер выполнен в стиле Тайского островного пляжного отдыха со всеми
            его атрибутами – водой и теплом, вкусными напитками и приятным досугом
          </div>
          <div className="s3_row">
            <div className="s3_row_item">
              <div className="s3_row_item_ico">
                <img src="img/s3_1.png" alt="icon"/>
              </div>
              <div className="s3_row_item_right">
                <div className="s3_row_item_title">Работаем с 2008 года</div>
                <div className="s3_row_item_desc">
                  SPA входят в ТОП 10 СПА салонов по независимому рейтингу Москвы
                </div>
              </div>
            </div>
            <div className="s3_row_item">
              <div className="s3_row_item_ico">
                <img src="img/s3_2.png" alt="icon"/>
              </div>
              <div className="s3_row_item_right">
                <div className="s3_row_item_title">Приватная зона отдыха</div>
                <div className="s3_row_item_desc">
                  Приватная зона отдыха, где Вы будете отдыхать индивидуально
                </div>
              </div>
            </div>
          </div>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <div className="s3_gallery">
              <a
                data-fancybox="gallery"
                href="img/sl3_1.jpg"
                className="s3_gallery_item"
              >
                <div className="screen_img">
                  <img
                    src="img/sl3_1.jpg"
                    alt="Спа-массаж тела и лица в Адлере"
                  />
                </div>
              </a>
              <a
                href="img/sl3_2.jpg"
                className="s3_gallery_item"
                data-fancybox="gallery"
              >
                <div className="screen_img">
                  <img src="img/sl3_2.jpg" alt="Спа-массаж цены Адлера"/>
                </div>
              </a>
              <a
                href="img/sl3_3.jpg"
                className="s3_gallery_item"
                data-fancybox="gallery"
              >
                <div className="screen_img">
                  <img
                    src="img/sl3_3.jpg"
                    alt="Спа-массаж для женщин в Адлере"
                  />
                </div>
              </a>
              <a
                href="img/sl3_4.jpg"
                className="s3_gallery_item"
                data-fancybox="gallery"
              >
                <div className="screen_img">
                  <img src="img/sl3_4.jpg" alt="Массаж в Спа салоне Адлера"/>
                </div>
              </a>
            </div>
            <div className="s3_row">
              <div className="s3_row_item">
                <div className="s3_row_item_ico">
                  <img src="img/s3_1.png" alt="icon"/>
                </div>
                <div className="s3_row_item_right">
                  <div className="s3_row_item_title">Дипломированные специалисты</div>
                  <div className="s3_row_item_desc">
                    Специалисты с медицинским образованием, опыт работы в спа-отелях
                    мирового уровня
                  </div>
                </div>
              </div>
              <div className="s3_row_item">
                <div className="s3_row_item_ico">
                  <img src="img/s3_2.png" alt="icon"/>
                </div>
                <div className="s3_row_item_right">
                  <div className="s3_row_item_title">Косметика класса де люкс</div>
                  <div className="s3_row_item_desc">
                    Используем косметику высочайшего класса La Sultane de Saba,
                    Thalasso Bretagne, Davines
                  </div>
                </div>
              </div>
            </div>
            <div className="s3_gallery">
              <a
                href="img/sl3_5.jpg"
                className="s3_gallery_item"
                data-fancybox="gallery"
              >
                <div className="screen_img">
                  <img src="img/sl3_5.jpg" alt="Массаж в спа салоне Адлера"/>
                </div>
              </a>
              <a
                href="img/sl3_6.jpg"
                className="s3_gallery_item"
                data-fancybox="gallery"
              >
                <div className="screen_img">
                  <img src="img/sl3_6.jpg" alt="спа массаж цена в Адлере"/>
                </div>
              </a>
              <a
                href="img/sl3_7.jpg"
                className="s3_gallery_item"
                data-fancybox="gallery"
              >
                <div className="screen_img">
                  <img
                    src="img/sl3_7.jpg"
                    alt="спа-массаж для женщины в Адлере"
                  />
                </div>
              </a>
              <a
                href="img/sl3_8.jpg"
                className="s3_gallery_item"
                data-fancybox="gallery"
              >
                <div className="screen_img">
                  <img
                    src="img/sl3_8.jpg"
                    alt="спа-массаж для мужчины в Адлере"
                  />
                </div>
              </a>
            </div>
          </Fancybox>
        </div>
      </div>
      <div className="s4" id="s4">
        <div className="s1_bg_line_top">
          <img src="img/line.png" alt="line"/>
          <img src="img/line.png" alt="line"/>
        </div>
        <div className="s1_bg_line">
          <img src="img/line.png" alt="line"/>
          <img src="img/line.png" alt="line"/>
        </div>
        <div className="wrapper">
          <div className="s4_content">
            <div className="seashell_img">
              <img
                src="img/rakushka.png"
                alt="Массаж в спа салоне для женщины в Адлере"
              />
            </div>
            <div className="s2_rose">
              <img src="img/rose2.png" alt="Спа массаж девушке в Адлере"/>
            </div>
            <h2>Массаж и спа для женщины</h2>
            <div className="subtitle">
              Мы составили 9 разнообразных программ и массаж на выбор для
              женщины,<br/>
              которые удовлетворят любой изысканный вкус
            </div>
            <div className="products">
              {womenProducts.map(service => (
                <ServiceCard key={service.id} service={service}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="s5" id="s5">
        <div className="wrapper">
          <div className="s4_content">
            <h2>Массаж и спа для мужчины</h2>
            <div className="subtitle">
              Мы составили 4 разнообразные программы и массаж на выбор для
              мужчины,<br/>
              которые удовлетворят любой изысканный вкус
            </div>
            <div className="products">
              {menProducts.map(service => (
                <ServiceCard key={service.id} service={service}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="s6" id="s6">
        <div className="s1_bg_line_top">
          <img src="img/line.png" alt="line"/>
          <img src="img/line.png" alt="line"/>
        </div>
        <div className="wrapper">
          <div className="s4_content">
            <div className="seashell_img">
              <img
                src="img/cup3.png"
                alt="Массаж и спа процедуры для двоих в салоне Адлера"
              />
            </div>
            <h2>Массаж и спа для двоих</h2>
            <div className="subtitle">
              Мы составили 3 разнообразные программы и массаж для двоих на
              выбор,<br/>
              которые удовлетворят любой изысканный вкус
            </div>
            <div className="products">
              {bothProducts.map(service => (
                <ServiceCard key={service.id} service={service}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="s7" id="s7">
        <div className="wrapper">
          <h2>Отзывы об услуге</h2>
          <Slider {...settings}>
            <div className="s7_slider_item">
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Ксения <span>04.01.2025</span>
                </div>
                <div className="s7_slider_item_block_desc">
                  <div className="s7_slider_item_rating">
                    <div className="s7_slider_item_star">
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                    </div>
                    <div className="s7_slider_item_rating_desc">отлично</div>
                  </div>
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Достоинства:</div>
                <div className="s7_slider_item_block_desc">Массаж расслабляет</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Недостатки:</div>
                <div className="s7_slider_item_block_desc">Хочется еще</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Комментарий:</div>
                <div className="s7_slider_item_block_desc">
                  Решила первый раз пойти на масляный массаж. Зря не попробовала
                  это чудо раньше( это как классический общий на все тело только
                  нааамного приятнее. Во время сеанса ощущаешь себя практически
                  невесомо. Даже гипертонусные мышцы прорабатываются так что не
                  больно. А после процедуры остается чувство расслабления и
                  облегчения, как после хорошего отдыха.
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Ответ администратора 04.01.2025
                </div>
                <div className="s7_slider_item_block_desc">Спасибо за Ваш отзыв</div>
              </div>
            </div>
            <div className="s7_slider_item">
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Анна <span>02.01.2025</span>
                </div>
                <div className="s7_slider_item_block_desc">
                  <div className="s7_slider_item_rating">
                    <div className="s7_slider_item_star">
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                    </div>
                    <div className="s7_slider_item_rating_desc">отлично</div>
                  </div>
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Достоинства:</div>
                <div className="s7_slider_item_block_desc">Эффективно</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Недостатки:</div>
                <div className="s7_slider_item_block_desc">нет</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Комментарий:</div>
                <div className="s7_slider_item_block_desc">
                  Хожу на оил-массаж как минимум раз в месяц. Очень крутая
                  процедура! Она и для расслабления мышц, и для кровообращения, и
                  для улучшения состояния кожи идеально подходит. Если хотите
                  попробовать массаж на все тело, то советую именно такой. Правда
                  часа будет маловато, так что берите на 1,5 или 2, чтоб уж точно
                  получить чистый кайф и отключиться от всего.
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Ответ администратора 02.01.2025
                </div>
                <div className="s7_slider_item_block_desc">Спасибо за Ваш отзыв</div>
              </div>
            </div>
            <div className="s7_slider_item">
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Лиза <span>01.07.2024</span>
                </div>
                <div className="s7_slider_item_block_desc">
                  <div className="s7_slider_item_rating">
                    <div className="s7_slider_item_star">
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                    </div>
                    <div className="s7_slider_item_rating_desc">отлично</div>
                  </div>
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Достоинства:</div>
                <div className="s7_slider_item_block_desc">Персонал</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Недостатки:</div>
                <div className="s7_slider_item_block_desc">-</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Комментарий:</div>
                <div className="s7_slider_item_block_desc">
                  Персонал супер, атмосфера в салоне супер, после массажа будто
                  перерождаешься! Я взяла полуторачасовой сеанс и кайфовала на
                  протяжении всей процедуры. Массажистка проработала буквально
                  каждую зону тела и поставила меня на ноги после адской рабочей
                  недели. Ушла головная боль, напряжение в плечах и шее, которое
                  не убиралось разминкой и зарядкой.
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Ответ администратора 02.01.2025
                </div>
                <div className="s7_slider_item_block_desc">Спасибо за Ваш отзыв</div>
              </div>
            </div>
            <div className="s7_slider_item">
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Елена <span>02.01.2025</span>
                </div>
                <div className="s7_slider_item_block_desc">
                  <div className="s7_slider_item_rating">
                    <div className="s7_slider_item_star">
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                    </div>
                    <div className="s7_slider_item_rating_desc">отлично</div>
                  </div>
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Достоинства:</div>
                <div className="s7_slider_item_block_desc">Кайф!</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Недостатки:</div>
                <div className="s7_slider_item_block_desc">- - - -</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Комментарий:</div>
                <div className="s7_slider_item_block_desc">
                  Крутейший тайский массаж с маслами! Я просто расплылась по
                  кушетке от удовольствия и расслабления. Хочу еще!)))
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Ответ администратора 02.01.2025
                </div>
                <div className="s7_slider_item_block_desc">Спасибо за Ваш отзыв</div>
              </div>
            </div>
            <div className="s7_slider_item">
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Анатолий <span>10.05.2024</span>
                </div>
                <div className="s7_slider_item_block_desc">
                  <div className="s7_slider_item_rating">
                    <div className="s7_slider_item_star">
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                    </div>
                    <div className="s7_slider_item_rating_desc">отлично</div>
                  </div>
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Достоинства:</div>
                <div className="s7_slider_item_block_desc">
                  Все очень понравилось, мастера просто класс!!!
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Недостатки:</div>
                <div className="s7_slider_item_block_desc">Нет</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Комментарий:</div>
                <div className="s7_slider_item_block_desc">
                  Спасибо за сервис и прекрасное настроение!
                </div>
              </div>
            </div>
            <div className="s7_slider_item">
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">
                  Вадим <span>31.12.2024</span>
                </div>
                <div className="s7_slider_item_block_desc">
                  <div className="s7_slider_item_rating">
                    <div className="s7_slider_item_star">
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                      <img src="img/star.svg" alt="star"/>
                    </div>
                    <div className="s7_slider_item_rating_desc">отлично</div>
                  </div>
                </div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Достоинства:</div>
                <div className="s7_slider_item_block_desc">Хороший массаж</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Недостатки:</div>
                <div className="s7_slider_item_block_desc">Нет</div>
              </div>
              <div className="s7_slider_item_block">
                <div className="s7_slider_item_block_title">Комментарий:</div>
                <div className="s7_slider_item_block_desc">
                  Мне нравится, что после массажа пропадают боли в спине и
                  выпрямляется осанка.
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="s8" id="s8">
        <div className="wrapper">
          <div className="s8_items">
            <div className="s8_left">
              <h3>Мы находимся здесь</h3>
              <a href="tel:+79965091011">✆ 8(996)509-10-11</a>
              <p><strong>Адлер</strong> ул.Кирпичная,24/2</p>
              <div className="social">
                <a href="https://wa.me/+79965091011" target="_blank">
                  <svg
                    width="30px"
                    height="30px"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.5 0C2.019 0 0 2.019 0 4.5v7c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5H4.5zm2.25 1.125h2.25c.138 0 .25.112.25.25v.75c0 .138-.112.25-.25.25h-2.25c-.138 0-.25-.112-.25-.25v-.75c0-.138.112-.25.25-.25zm-1.125.563c-.138 0-.25.112-.25.25v1.5c0 .138.112.25.25.25h.563c.138 0 .25-.112.25-.25v-.563c0-.138-.112-.25-.25-.25h-.313v-.5h.313zm3.563.5c.69 0 1.25.56 1.25 1.25v.75c0 .138-.112.25-.25.25h-.563c-.138 0-.25-.112-.25-.25v-.563c0-.138-.112-.25-.25-.25h-.313v-.5h.626zm-3.563 1.5h.313c.138 0 .25.112.25.25v1.5c0 .138-.112.25-.25.25h-.313v.5h-.563v-.5h-.313c-.138 0-.25-.112-.25-.25v-1.5c0-.138.112-.25.25-.25h.313v-.5h.563v.5zm3.563 1.5c.138 0 .25.112.25.25v.563c0 .138-.112.25-.25.25h-.563c-.138 0-.25-.112-.25-.25v-.563c0-.138.112-.25.25-.25h.563zm-1.125.563c0 .138-.112.25-.25.25h-.313v.5h-.563v-.5h-.313c-.138 0-.25-.112-.25-.25v-1.5c0-.138.112-.25.25-.25h.313v.5h.563v-.5h.313c.138 0 .25.112.25.25v1.5z"
                    />
                  </svg>
                </a>
                <a href="https://t.me/alex_estetica" target="_blank">
                  <svg
                    className="t-sociallinks__svg"
                    version="1.1"
                    width="30px"
                    height="30px"
                    viewBox="0 0 60 60"
                  >
                    <desc>Telegram</desc>
                    <path
                      d="M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm16.9 13.9l-6.7 31.5c-.1.6-.8.9-1.4.6l-10.3-6.9-5.5 5.2c-.5.4-1.2.2-1.4-.4L18 32.7l-9.5-3.9c-.7-.3-.7-1.5 0-1.8l37.1-14.1c.7-.2 1.4.3 1.3 1z"
                    ></path>
                    <path
                      d="M22.7 40.6l.6-5.8 16.8-16.3-20.2 13.3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="s8_right">
              <div className="map">
                <iframe
                  src="https://yandex.com/map-widget/v1/?um=constructor%3A738dcd11e0e28648c986f271179e1b24a18dc7b6a0991addb935792de5815a69&amp;source=constructor"
                  width="888" height="660" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="socials">
        <div className="whats_up">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path
              d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"></path>
          </svg>
        </div>
        <div className="whats_up">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path
              d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"></path>
          </svg>
        </div>
        <div className="whats_up">
          <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
              stroke="#292D32"/>
          </svg>
        </div>
      </div>
      <div className="to_cart" onClick={() => setPopup(true)}>
        <svg
          enableBackground="new 0 0 40 40"
          id="Слой_1"
          version="1.1"
          viewBox="0 0 40 40"
        >
          <g>
            <path
              d="M38.9,11.9c-0.8-0.9-1.9-1.5-3.1-1.5H20.4c-0.5,0-1,0.4-1,1c0,0.6,0.5,1,1,1h15.4c0.6,0,1.2,0.3,1.6,0.7   c0.4,0.5,0.6,1.1,0.4,1.7l-0.9,5h-11c-0.5,0-1,0.4-1,1s0.5,1,1,1h10.7l-0.9,4.8c-0.1,0.7-0.8,1.2-1.5,1.2H15   c-0.7,0-1.3-0.5-1.5-1.2L9.6,4.9c-0.1-0.5-0.5-0.8-1-0.8H0.9c-0.5,0-1,0.4-1,1s0.5,1,1,1h6.9l3.8,21c0.2,1.4,1.2,2.4,2.5,2.8   c-0.5,0.7-0.9,1.6-0.9,2.6c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5c0-0.9-0.3-1.8-0.8-2.5h6.1c-0.5,0.7-0.8,1.6-0.8,2.5   c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5c0-1-0.3-1.9-0.8-2.6c1.3-0.3,2.4-1.4,2.7-2.8l2.2-11.8C40,14.1,39.7,12.9,38.9,11.9z    M20.2,32.4c0,1.4-1.1,2.5-2.5,2.5s-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5S20.2,31,20.2,32.4z M31.3,34.9c-1.4,0-2.5-1.1-2.5-2.5   c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5C33.8,33.8,32.7,34.9,31.3,34.9z"
            />
          </g>
        </svg>
      </div>
      <div className={`popup popup_card ${popup ? 'active' : ''}`}>
        <div className="close1" onClick={() => setPopup(false)}></div>
        <div className="popup-block">
          <div className="close2" onClick={() => setPopup(false)}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M12.5956 10.6452C13.1348 11.1847 13.1348 12.0564 12.5956 12.5958C12.4676 12.7241 12.3156 12.8258 12.1482 12.8952C11.9808 12.9645 11.8013 13.0001 11.6201 12.9999C11.2671 12.9999 10.914 12.8648 10.645 12.5958L6.50003 8.45055L2.35511 12.5959C2.22718 12.7241 2.07517 12.8259 1.9078 12.8952C1.74044 12.9646 1.56103 13.0002 1.37987 13C1.19869 13.0002 1.01926 12.9646 0.851875 12.8952C0.684492 12.8259 0.532458 12.7242 0.404503 12.5959C-0.134747 12.0564 -0.134747 11.1847 0.404503 10.6452L4.54968 6.50016L0.404438 2.35516C-0.134813 1.81564 -0.134813 0.943965 0.404438 0.404511C0.943946 -0.13475 1.8156 -0.13475 2.35511 0.404511L6.50003 4.54977L10.645 0.404446C11.1845 -0.134815 12.0561 -0.134815 12.5956 0.404446C13.1348 0.943965 13.1348 1.81564 12.5956 2.35516L8.45039 6.50016L12.5956 10.6452Z"
                fill="white"
              />
            </svg>
          </div>
          <form>
            <div className="cart">
              <div className="total_price_wrapper">
                <h2 className="total_price_title">Итого:</h2>
                <p className="all_total_price">{totalPrice} р.</p>
              </div>

              {cart.length ? (
                <>
                  {cart.map(service => (
                    <div className="d-flex flex-row shadow-sm card cart-items mt-2 mb-3 animated flipInX"
                         key={service.id}>
                      <div className="p-2">
                        <img src={`${service.image}`} alt={`${service.title}`} style={{maxWidth: "50px"}}/>
                      </div>
                      <div className="cart_name p-2 mt-3">
                        <p className="text-info cart_item_name">{service.title}</p>
                        <p className="text-info cart_item_price">{service.price} р.</p>
                      </div>
                      <input name="Товар" type="hidden" value={`${service.name}`}/>


                      <div className="cart_rem p-2 mt-3">
                        <button className="btn badge badge-danger remove_btn" type="button"
                                onClick={() => removeFromCart(service.id)}>&times;
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="cart_form">
                    <div className="cart_form_input">
                      <input name="Имя" type="text" placeholder="Ваше имя"/>
                    </div>
                    <div className="cart_form_input">
                      <input name="Телефон" className="phone_input" type="text" placeholder="Ваш телефон"/>
                    </div>
                    <div className="cart_form_submit" onClick={(e) => {
                      e.preventDefault()
                      setOrderSent(true),
                        setPopup(false)
                    }}>
                      <input className="btn" type="submit" value="Заказать"/>
                    </div>
                  </div>
                </>
              ) : ''}
            </div>
          </form>
        </div>
      </div>
      <div className="popup popup_last" style={{display: orderSent ? "block" : "none"}}>
        <div className="close1" onClick={()=> setOrderSent(false)}></div>
        <div className="popup-block">
          <div className="close2" onClick={()=> setOrderSent(false)}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M12.5956 10.6452C13.1348 11.1847 13.1348 12.0564 12.5956 12.5958C12.4676 12.7241 12.3156 12.8258 12.1482 12.8952C11.9808 12.9645 11.8013 13.0001 11.6201 12.9999C11.2671 12.9999 10.914 12.8648 10.645 12.5958L6.50003 8.45055L2.35511 12.5959C2.22718 12.7241 2.07517 12.8259 1.9078 12.8952C1.74044 12.9646 1.56103 13.0002 1.37987 13C1.19869 13.0002 1.01926 12.9646 0.851875 12.8952C0.684492 12.8259 0.532458 12.7242 0.404503 12.5959C-0.134747 12.0564 -0.134747 11.1847 0.404503 10.6452L4.54968 6.50016L0.404438 2.35516C-0.134813 1.81564 -0.134813 0.943965 0.404438 0.404511C0.943946 -0.13475 1.8156 -0.13475 2.35511 0.404511L6.50003 4.54977L10.645 0.404446C11.1845 -0.134815 12.0561 -0.134815 12.5956 0.404446C13.1348 0.943965 13.1348 1.81564 12.5956 2.35516L8.45039 6.50016L12.5956 10.6452Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="popup_title">Благодарим за ваш запрос</div>
          <div className="popup_subtitle">
            В ближайшее время с вами свяжется наш специалист!
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} product={selectedProduct}/>

    </div>
  );
}
