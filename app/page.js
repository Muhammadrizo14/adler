"use client";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import {useState} from "react";

export default function Page() {
  const [popup, setPopup] = useState(false)
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
          <div className="s3_gallery">
            <a
              href="img/sl3_1.jpg"
              className="s3_gallery_item"
              data-fancybox="gallery"
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
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_1.jpg"
                      alt="Массаж и процедуры для женщины в Адлере"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">Массаж на выбор</div>
                    <div className="product_work">Длительность - 1 час</div>
                    <div className="product_price product-price">
                      4000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_1.jpg"
                            alt="Спа массаж для женщины в Адлере"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Массаж на выбор
                            </div>
                            <div className="product_work">Длительность - 1 час</div>
                            <div className="product_price product-price">
                              4000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Классические и экзотические виды массажа на выбор для
                            расслабления или с глубокой проработкой мышц по
                            показаниям для оздоровления и релаксации в атмосфере
                            уюта.<br/>Массаж на выбор:<br/>
                            <ul>
                              <li>Массаж горячими камешками базальт</li>
                              <li>Тайский массаж</li>
                              <li>Спортивный массаж</li>
                              <li>Классический массаж</li>
                              <li>Лимфодренажный массаж</li>
                              <li>Антицеллюлитный массаж</li>
                              <li>Косметический массаж лица</li>
                              <li>Индийский массаж</li>
                              <li>Креолольский массаж(Бамбаковыми палочками)</li>
                              <li>Японский Шиацу массаж</li>
                              <li>Тибетский массаж с поющими чашами</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_2.jpg"
                      alt="массаж девушке в спа-салоне Адлера тропическая ночь"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Тропическая ночь
                    </div>
                    <div className="product_work">Длительность - 1.30 часа</div>
                    <div className="product_price product-price">
                      5000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_2.jpg"
                            alt="массаж для женщины в спа салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Тропическая ночь
                            </div>
                            <div className="product_work">
                              Длительность - 1.30 часа
                            </div>
                            <div className="product_price product-price">
                              5000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Погрузитесь в удовольствие Тропической ночи, от
                            сочетания массажа горячими камнями и Relax-массажа на
                            нежном кокосовом молочке, которое одновременно
                            тонизирует и укреплят кожу, а великолепный
                            расслабляющий массаж приятно согревает. Кожа
                            становится гладкой и мягкой, заживают мелкие трещинки,
                            улучшаются контуры и уменьшаются объемы, уходит
                            нервное и мышечное напряжение.<br/>Спа программа
                            включает:<br/>
                            <ul>
                              <li>
                                массаж горячими камнями с расстановкой по
                                точкам-30минут
                              </li>
                              <li>
                                relax-массаж на нежном кокосовом молочке-30минут
                              </li>
                              <li>aroma-релаксация всего тела-30 минут</li>
                              <li>Комплимент для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_3.jpg"
                      alt="спа-массаж для женщины жизнь в шоколаде"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Жизнь в шоколаде
                    </div>
                    <div className="product_work">Длительность - 2 часа</div>
                    <div className="product_price product-price">
                      7000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_3.jpg"
                            alt="массаж девушке жизнь в шоколаде в спа-салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Жизнь в шоколаде
                            </div>
                            <div className="product_work">Длительность - 2 часа</div>
                            <div className="product_price product-price">
                              7000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Какао — единственный продукт растительного
                            происхождения, который обладает благотворной
                            энергетикой. Результат его применения виден после
                            первых сеансов. Маски и пилинги с шоколадом не только
                            улучшают состояние кожи, но также активизируют
                            защитные силы организма, способствуя сжиганию
                            подкожных жиров, уменьшению отеков, разглаживанию
                            морщин.<br/>Спа программа включает:<br/>
                            <ul>
                              <li>
                                согревающий стоун-массаж всего тела горячими
                                камнями - 30 минут
                              </li>
                              <li>
                                отчищающий пилинг-массаж всего тела перчаткой
                                Kessa - 30 минут
                              </li>
                              <li>
                                испанский массаж с обёртыванием воздушным
                                шоколадом тела - 1 час
                              </li>
                              <li>
                                relax-массаж лица на шоколаде или кокосе(во время
                                обертывания)
                              </li>
                              <li>Комплимент с чаепитием или какао для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_4.jpg"
                      alt="спа-массаж для женщины ароматный глинтвейн в Адлере"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Ароматный глинтвейн
                    </div>
                    <div className="product_work">Длительность - 2 часа</div>
                    <div className="product_price product-price">
                      7000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_5.jpg"
                            alt="массаж девушке в спа салоне Адлера ароматный глинтвейн"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Спа программа Ароматный глинтвейн
                            </div>
                            <div className="product_work">Длительность - 2 часа</div>
                            <div className="product_price product-price">
                              7000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Сладкий дразнящий аромат корицы знаком всем с детства
                            — так пахнут свежие булочки, пироги, а также горячий
                            зимний глинтвейн! Но мало кто знает о её полезных
                            свойствах: корица обладает разогревающим свойством,
                            благотворно воздействует на обмен веществ, очищает
                            организм от вредных веществ и соединений. А в
                            сочетании с вином обладает прекрасным омолаживающим
                            эффектом, так как в вине имеются антиоксиданты,
                            замедляющие процесс старения.<br/>Спа программа
                            включает:<br/>
                            <ul>
                              <li>стоун массаж горячими камнями - 30 минут</li>
                              <li>
                                отчищающий пилинг-массаж перчатками Kessa - 30
                                минут
                              </li>
                              <li>
                                массаж «Жато Велнесс» с обёртыванием «Ароматный
                                глинтвейн» из винограда и корицы
                                (антистрессовый,глубокая проработка мышц) - 1 час
                              </li>
                              <li>Комплимент с чаепитием или кофе для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_5.jpg"
                      alt="спа-массаж для женщины совершенство в Адлере"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Совершенство
                    </div>
                    <div className="product_work">Длительность - 2 часа</div>
                    <div className="product_price product-price">
                      7000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_5.jpg"
                            alt="массаж девушке в спа-салоне Адлера совершенство"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Спа программа Совершенство
                            </div>
                            <div className="product_work">Длительность - 2 часа</div>
                            <div className="product_price product-price">
                              7000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Видимое уменьшение проблемных зон (бедра, живот),
                            четкие, подтянутые контуры тела, нормализация
                            внутренних обменных процессов в организме, снятие
                            нервного напряжения – такой эффект Вы получите уже
                            после первого сеанса.<br/>Спа программа включает:<br/>
                            <ul>
                              <li>стоун-масаж горячими камнями - 30 минут</li>
                              <li>
                                отчищающий пилинг-массаж перчатками Kessa - 30
                                минут
                              </li>
                              <li>
                                массаж на выбор: моделирующий, антицеллюлитный,
                                лимфодренажный, классический, испанский
                                хиромассаж, индийский, микс-массаж (стоун-массаж и
                                аромамассаж) - 60 минут
                              </li>
                              <li>
                                обертывание на выбор: криоактивное, термоактивное,
                                дренажное - 30 минут
                              </li>
                              <li>Комплимент для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_6.jpg"
                      alt="спа-массаж для женщины под пальмой в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Под пальмой
                    </div>
                    <div className="product_work">Длительность - 1.30 часа</div>
                    <div className="product_price product-price">
                      5000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_6.jpg"
                            alt="массаж девушке в спа салоне Адлера под пальмой"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Под пальмой
                            </div>
                            <div className="product_work">
                              Длительность - 1.30 часа
                            </div>
                            <div className="product_price product-price">
                              5000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Глубокое расслабление мышц всего тела согревающими
                            камнями вулканической породы базальт и креольский
                            массаж бамбуковыми палочками стимулирует точки
                            иннервации всего тела и тонизирует кожу. Нежный аромат
                            кокоса окутает Вас и перенесет на пляжи тропических
                            курортов.<br/>Спа программа включает:<br/>
                            <ul>
                              <li>
                                массаж бамбуковыми палочками и горячими камнями —
                                30 минут
                              </li>
                              <li>
                                массаж тела на кокосовом молочке с aroma
                                релаксацией— 1 час
                              </li>
                              <li>Комплимент для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_7.jpg"
                      alt="массаж для женщины Летнее настроение в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Спа программа Летнее настроение
                    </div>
                    <div className="product_work">Длительность - 1.30 часа</div>
                    <div className="product_price product-price">
                      5000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_7.jpg"
                            alt="массаж женщине в спа-салоне Адлера летнее настроение"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Летнее настроение
                            </div>
                            <div className="product_work">
                              Длительность - 1.30 часа
                            </div>
                            <div className="product_price product-price">
                              5000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Ароматы экзотических фруктов и нежные прикосновения
                            СПА мастеров, расслабят и наполнят новыми ощущениями
                            летнего настроения.<br/>Спа программа включает:<br/>
                            <ul>
                              <li>пилинг-массаж перчатками Kessa-30минут</li>
                              <li>
                                relax-массаж фруктовыми миксами(на выбор)с aroma
                                релаксацией - 60 минут
                              </li>
                              <li>Комплимент для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_8.jpg"
                      alt="спа-массаж женщине кокосовый рай в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Кокосовый рай
                    </div>
                    <div className="product_work">Длительность - 2 часа</div>
                    <div className="product_price product-price">
                      7000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_8.jpg"
                            alt="массаж для женщины кокосовый рай в спа-салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Спа программа Кокосовый рай
                            </div>
                            <div className="product_work">Длительность - 2 часа</div>
                            <div className="product_price product-price">
                              7000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Нежное очищение всего тела перчаткой Kessa и
                            расслабляющий индийский массаж на теплом кокосовом
                            масле с согревающим массажем горячими камнями базальт
                            внесут новые впечатления.<br/>Спа программа
                            включает:<br/>
                            <ul>
                              <li>стоун-массаж горячими камнями — 30 минут</li>
                              <li>
                                отчищающий пилинг-массаж перчатками Kessa — 30
                                минут
                              </li>
                              <li>
                                Тайский массаж на тёплом кокосовом масле с aroma
                                релаксацией — 60 минут
                              </li>
                              <li>Комплимент для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_9.jpg"
                      alt="спа-массаж женщине Жемчужина моря в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Жемчужина моря
                    </div>
                    <div className="product_work">Длительность - 3 часа</div>
                    <div className="product_price product-price">
                      9000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_9.jpg"
                            alt="массаж для женщины Жемчужина моря в спа салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Жемчужина моря
                            </div>
                            <div className="product_work">Длительность - 3 часа</div>
                            <div className="product_price product-price">
                              9000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Спа программа включает:<br/>
                            <ul>
                              <li>
                                очищающий пилинг массаж рукавичками Kessa — 30
                                минут
                              </li>
                              <li>стоун-массаж с горячими камнями — 30 минут</li>
                              <li>
                                Тайский или индийский массаж на выбор и
                                обёртывание с экстрактом жемчуга и розы — 1.30 час
                              </li>
                              <li>
                                массаж лица с экстрактом жемчуга и розы — 30 минут
                              </li>
                              <li>Комплимент для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s4_10.jpg"
                      alt="массаж для женщины Коста-Рика в спа-салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Коста-Рика
                    </div>
                    <div className="product_work">Длительность - 3 часа</div>
                    <div className="product_price product-price">
                      9000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s4_10.jpg"
                            alt="спа-массаж женщине Коста-Рика в салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Коста-Рика
                            </div>
                            <div className="product_work">Длительность - 3 часа</div>
                            <div className="product_price product-price">
                              9000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Спа программа включает:<br/>
                            <ul>
                              <li>
                                отчищающий пилинг-массаж перчатками Kessa — 30
                                минут
                              </li>
                              <li>
                                массаж бамбуковыми палочками с кокосовым
                                обёртыванием тела — 2 часа
                              </li>
                              <li>креольский массаж лица — 30 минут</li>
                              <li>комплимент для гостя с чаепитием или кофе</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s5_1.jpg"
                      alt="Массаж для мужчины в спа салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">Массаж на выбор</div>
                    <div className="product_work">Длительность - 1 час</div>
                    <div className="product_price product-price">
                      4000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s5_1.jpg"
                            alt="Массаж мужчине в спа салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Массаж на выбор
                            </div>
                            <div className="product_work">Длительность - 1 час</div>
                            <div className="product_price product-price">
                              4000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Классические и экзотические виды массажа на выбор для
                            расслабления или с глубокой проработкой мышц по
                            показаниям для оздоровления и релаксации в атмосфере
                            уюта.<br/>Массаж на выбор:<br/>
                            <ul>
                              <li>Массаж горячими камешками базальт</li>
                              <li>Тайский массаж</li>
                              <li>Спортивный массаж</li>
                              <li>Классический массаж</li>
                              <li>Лимфодренажный массаж</li>
                              <li>Антицеллюлитный массаж</li>
                              <li>Косметический массаж лица</li>
                              <li>Индийский массаж</li>
                              <li>Креолольский массаж(Бамбаковыми палочками)</li>
                              <li>Японский Шиацу массаж</li>
                              <li>Тибетский массаж с поющими чашами</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s5_2.jpg"
                      alt="массаж для мужчины Монарх в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">Программа Монарх</div>
                    <div className="product_work">Длительность - 2 часа</div>
                    <div className="product_price product-price">
                      8000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s5_2.jpg"
                            alt="Массаж мужчине Монарх в спа-салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Монарх
                            </div>
                            <div className="product_work">Длительность - 2 часа</div>
                            <div className="product_price product-price">
                              8000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Королевский массаж с мужскими арома-маслами, расслабит вас и даст
                            массу незабываемых ощущений, словно вы отдохнули на
                            курорте. Этот экзотический массаж строится на
                            контрастных переживаниях и мягком тепле базальтовых
                            камней. Польза и наслаждение, которые вы получаете в
                            процессе Королевскогого массажа останутся с вами на
                            долго.<br/>В Спа программу входит:<br/>
                            <ul>
                              <li>Стоун массаж горячими камнями - 1 час</li>
                              <li>точечный массаж стоп и ладоней - 30 минут</li>
                              <li>
                                королевский массаж с aroma релаксацией - 30 минут
                              </li>
                              <li>Комплимент для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s5_3.jpg"
                      alt="массаж мужчине Rehabilitation в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Rehabilitation
                    </div>
                    <div className="product_work">Длительность - 1 час 30 минут</div>
                    <div className="product_price product-price">
                      5000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s5_3.jpg"
                            alt="Массаж для мужчины Rehabilitation в спа салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Спа программа Rehabilitation
                            </div>
                            <div className="product_work">
                              Длительность - 1 час 30 минут
                            </div>
                            <div className="product_price product-price">
                              5000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Прочь от надоевшей работы! Долой перегрузки! Позвольте
                            себе отвлечься от повседневности на миг!
                            Восстанавливающий массаж Жато Велнесс с горячими
                            камнями,способствует полному расслаблению, регулирует
                            работу вегетативной системы, помогает преодолеть
                            психические и физические перегрузки, депрессию.<br/>Спа
                            программа включает:<br/>
                            <ul>
                              <li>стоун-массаж горячими камнями — 30 минут</li>
                              <li>
                                массаж Жато Велнесс с aroma релаксацией — 60 минут
                              </li>
                              <li>Комплимент с чаепитием или кофе для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s5_4.jpg"
                      alt="спа-массаж для мужчины Relax в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">Программа Relax</div>
                    <div className="product_work">Длительность - 1 час 30 минут</div>
                    <div className="product_price product-price">
                      5000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s5_4.jpg"
                            alt="Массаж мужчине Relax в спа салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Relax
                            </div>
                            <div className="product_work">
                              Длительность - 1 час 30 минут
                            </div>
                            <div className="product_price product-price">
                              5000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Спа программа включает:<br/>
                            <ul>
                              <li>
                                стоун массаж горячими камнями базальт — 30 минут
                              </li>
                              <li>
                                аккупунктурный массаж с aroma релаксацией - 1 час
                              </li>
                              <li>Комплимент с чаепитием или кофе для гостя</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s6_1.jpg"
                      alt="Массаж для двоих в спа салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Массаж для двоих на выбор
                    </div>
                    <div className="product_work">Длительность - 1 час</div>
                    <div className="product_price product-price">
                      8000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s6_1.jpg"
                            alt="Массаж двоим в салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Массаж для двоих на выбор
                            </div>
                            <div className="product_work">Длительность - 1 час</div>
                            <div className="product_price product-price">
                              8000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Классические и экзотические виды массажа на выбор для
                            расслабления или с глубокой проработкой мышц по
                            показаниям для оздоровления и релаксации в атмосфере
                            уюта.<br/>Массаж на выбор:<br/>
                            <ul>
                              <li>Массаж горячими камешками базальт</li>
                              <li>Тайский массаж</li>
                              <li>Спортивный массаж</li>
                              <li>Классический массаж</li>
                              <li>Лимфодренажный массаж</li>
                              <li>Антицеллюлитный массаж</li>
                              <li>Косметический массаж лица</li>
                              <li>Индийский массаж</li>
                              <li>Креолольский массаж(Бамбаковыми палочками)</li>
                              <li>Японский Шиацу массаж</li>
                              <li>Тибетский массаж с поющими чашами</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s6_2.jpg"
                      alt="спа-массаж для двоих Рай на двоих в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Рай на двоих
                    </div>
                    <div className="product_work">Длительность - 2 часа</div>
                    <div className="product_price product-price">
                      15000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s6_2.jpg"
                            alt="Массаж двоим Рай на двоих в спа салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Рай на двоих
                            </div>
                            <div className="product_work">Длительность - 2 часа</div>
                            <div className="product_price product-price">
                              15000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Радость совместного наслаждения целебными и волнующими
                            СПА-процедурами в Адлере с возможностью признаться
                            в своих нежных чувствах к любимому человеку. Яркие
                            впечатления которые останутся с вами надолго!<br/>Спа
                            программа включает:<br/>
                            <ul>
                              <li>
                                для двоих - Стоун-массаж согревающими камнями - 30
                                минут
                              </li>
                              <li>
                                для нее - Тайский маслянный арома-массаж - 1 час
                              </li>
                              <li>
                                для него - Традиционный тайский массаж - 1 час
                              </li>
                              <li>
                                для двоих - отчищающий пилинг-массаж перчатками
                                Kessa - 30минут
                              </li>
                              <li>Комплимент с чаепитием или кофе для пары</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s6_3.jpg"
                      alt="спа-массаж для двоих приключение в Тае в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа приключение в Тае для двоих
                    </div>
                    <div className="product_work">Длительность - 2 часа</div>
                    <div className="product_price product-price">
                      15000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s6_3.jpg"
                            alt="Массаж двоим приключение в Тае в салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа приключение в Тае для двоих
                            </div>
                            <div className="product_work">Длительность - 2 часа</div>
                            <div className="product_price product-price">
                              15000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            СПА — вечеринка для лучших друзей! Общение, здоровье,
                            красота - вот девиз этой программы!<br/>Спа программа
                            включает:<br/>
                            <ul>
                              <li>
                                для двоих - отчищающий пилинг-массаж - 30 минут
                              </li>
                              <li>
                                для неё - Тайский маслянный массаж на кокосовом
                                молочке - 1.30 час
                              </li>
                              <li>
                                для него — Тайский Йога массаж с глубокой
                                проработкой и расслаблением - 1.30 час
                              </li>
                              <li>Комплимент с чаепитием или кофе для двоих.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product card">
                <div className="product_img">
                  <div className="screen_img">
                    <img
                      className="product-img"
                      src="img/s6_4.jpg"
                      alt="спа-массаж для двоих Роскошь океана в салоне Адлера"
                    />
                  </div>
                </div>
                <div className="product_content">
                  <div className="product_desc">
                    <div className="product_title product-name">
                      Программа Роскошь океана для двоих
                    </div>
                    <div className="product_work">Длительность - 3 часа</div>
                    <div className="product_price product-price">
                      19000 <span>р.</span>
                    </div>
                  </div>
                  <div className="product_buy btn" data-action="add-to-cart">
                    Заказать
                  </div>
                  <div className="product_more">Подробнее</div>
                </div>
                <div className="popup popup_product">
                  <div className="close1"></div>
                  <div className="popup-block">
                    <div className="close2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
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
                    <div className="product_popup">
                      <div className="product_popup_items">
                        <div className="product_popup_img">
                          <img
                            className="product-img"
                            src="img/s6_4.jpg"
                            alt="Массаж двоим Роскошь океана в спа салоне Адлера"
                          />
                        </div>
                        <div className="product_popup_right">
                          <div className="product_desc">
                            <div className="product_title product-name">
                              Программа Роскошь океана для двоих
                            </div>
                            <div className="product_work">Длительность - 3 часа</div>
                            <div className="product_price product-price">
                              19000 <span>р.</span>
                            </div>
                          </div>
                          <div className="product_buy btn" data-action="add-to-cart">
                            Заказать
                          </div>
                          <div className="product_popup_content content">
                            Спа программа включает:<br/>
                            <ul>
                              <li>
                                для двоих - отчищающий пилинг-массаж
                                перчатками-Kessa - 30 минут
                              </li>
                              <li>
                                для двоих - Стоунтерапия горячими камнями базальт
                                — 30 минут
                              </li>
                              <li>
                                для двоих - relax массаж и питание тела протеином
                                черной икры - 1.30 час
                              </li>
                              <li>
                                для неё - массаж лица воздушным кремом с протеином
                                черной икры — 30 минут
                              </li>
                              <li>
                                для него - массаж головы с уходом для питания
                                волос - 30 минут
                              </li>
                              <li>комплимент с чаепитием или кофе для гостей</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s7" id="s7">
        <div className="wrapper">
          <h2>Отзывы об услуге</h2>
          <div className="s7_slider">
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
          </div>
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
      <div className="to_cart" onClick={()=> setPopup(true)} >
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
        <div className="close1" onClick={()=> setPopup(false)}></div>
        <div className="popup-block" >
          <div className="close2"  onClick={()=> setPopup(false)}>
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
                <p className="all_total_price"></p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="popup popup_last">
        <div className="close1"></div>
        <div className="popup-block">
          <div className="close2">
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

    </div>
  );
}
