"use client";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Footer() {
  const [search, setSearch] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="header_items">
            <div className="header_logo">
              <a href="/">
							<span>
								<img
                  src="img/logo.jpg"
                  alt="Массаж и Спа процедуры - Адлер"
                />
							</span>
                <span>Атмосферные спа-салоны<br/>в Адлере</span>
              </a>
            </div>
            <div className="header_search_wrapper">
              <div className="header_filters_btn">
							<span className="header_filters_icon">
								<img src="./img/filters_icon.webp" alt="filters_icon"/>
							</span>
                <span className="header_close_icon">
								<img src="img/close_icon.webp" alt="close_icon"/>

							</span>
                <span className="filters_btn_title">Фильтры</span>
              </div>
              <div className="header_searchbar" onClick={() => setSearch(true)}>
                <div className='search_icon'>

                </div>
                <input
                  className="live_search"
                  type="text"
                  name="search"
                  id="live_search"
                  placeholder="Поиск"
                />
              </div>
            </div>
            <div className="header_contact">
              <a href="tel:89965091011">8 (996) 509-10-11</a>
              <p>Работаем с 10:00 до 22:00</p>
            </div>
            <div className={`burger ${sidebar ? 'burger_active' : ''}`}
                 onClick={() => setSidebar(prevState => !prevState)}>
              <div className="burger_icon"></div>
            </div>
          </div>
          <div className={`header_search_menu ${search ? "active" : ""}`}>
            <div className="search_menu_filters">
              <div className="procedure_duration procedure">
                <h2 className="filter_title">Длительность процедуры:</h2>
                <div className="procedure_duration_checkbox">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name="filter_duration"
                    id="fldur1"
                    data-duration="duration-1"
                  />
                  <label htmlFor="fldur1">1 час</label>
                </div>
                <div className="procedure_duration_checkbox">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name="filter_duration"
                    id="fldur2"
                    data-duration="duration-1:30"
                  />
                  <label htmlFor="fldur2">1 час 30 минут</label>
                </div>
                <div className="procedure_duration_checkbox">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name="filter_duration"
                    id="fldur3"
                    data-duration="duration-2"
                  />
                  <label htmlFor="fldur3">2 часа</label>
                </div>
                <div className="procedure_duration_checkbox">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name="filter_duration"
                    id="fldur4"
                    data-duration="duration-3"
                  />
                  <label htmlFor="fldur4">3 часа</label>
                </div>
              </div>
              <div className="procedure_kind procedure">
                <h2 className="filter_title">Вид услуги</h2>
                <div className="procedure_kind_radio">
                  <input
                    className="custom_radio custom_radio_kind"
                    type="radio"
                    name="filter_kind"
                    id="flkind1"
                    data-kind="massage"
                  />
                  <label htmlFor="flkind1">Массаж</label>
                </div>
                <div className="procedure_for_whom_radio">
                  <input
                    className="custom_radio custom_radio_kind"
                    type="radio"
                    name="filter_kind"
                    id="flkind2"
                    data-kind="spa"
                  />
                  <label htmlFor="flkind2">Спа</label>
                </div>
              </div>
              <div className="procedure_for_whom procedure">
                <h2 className="filter_title">Для кого:</h2>
                <div className="procedure_for_whom_radio">
                  <input
                    className="custom_radio"
                    type="radio"
                    name="filter_for_whom"
                    id="flwhom1"
                    data-for_whom="women"
                  />
                  <label htmlFor="flwhom1">Для женщины</label>
                </div>
                <div className="procedure_for_whom_radio">
                  <input
                    className="custom_radio"
                    type="radio"
                    name="filter_for_whom"
                    id="flwhom2"
                    data-for_whom="men"
                  />
                  <label htmlFor="flwhom2">Для мужчины</label>
                </div>
                <div className="procedure_for_whom_radio">
                  <input
                    className="custom_radio"
                    type="radio"
                    name="filter_for_whom"
                    id="flwhom3"
                    data-for_whom="both"
                  />
                  <label htmlFor="flwhom3">Для двоих</label>
                </div>
              </div>
              <div className="procedure_price procedure">
                <h2 className="filter_title">Цена:</h2>
                <div className="filter_price_from_to">
                  <input
                    className="filter_price_from"
                    type="number"
                    name="filter_price_from"
                    id="flpricefrom"
                    placeholder="От"
                  />
                  <input
                    className="filter_price_to"
                    type="number"
                    name="filter_price_to"
                    id="flpriceto"
                    placeholder="До"
                  />
                </div>
              </div>
              <button type="button" className="submit_filters btn">Применить</button>
              <button type="button" className="remove_filters product_more">
                Очистить
              </button>
            </div>
            <div type="button" className="search_close_btn" onClick={() => setSearch(false)}></div>
            <div className="search_menu_products">
              <div className="product card duration-1 women massage">
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
                    1
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
              <div className="product card duration-1:30 women spa">
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
              <div className="product card duration-2 women spa">
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
              <div className="product card duration-2 women spa">
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
              <div className="product card duration-2 women spa">
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
              <div className="product card duration-1:30 women spa">
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
              <div className="product card duration-1:30 women spa">
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
              <div className="product card duration-2 women spa">
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
              <div className="product card duration-3 women spa">
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
              <div className="product card duration-3 women spa">
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
              <div className="product card duration-1 men massage">
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
              <div className="product card duration-2 men spa">
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
              <div className="product card duration-1:30 men spa">
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
              <div className="product card duration-1:30 men spa">
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
              <div className="product card duration-1 both massage">
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
              <div className="product card duration-2 both spa">
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
              <div className="product card duration-2 both spa">
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
              <div className="product card duration-3 both spa">
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
          <div className="search_menu_filters mobile">
            <div type="button" className="filters_close_btn"></div>
            <div className="procedure_duration procedure">
              <h2 className="filter_title">Длительность процедуры:</h2>
              <div className="procedure_duration_checkbox">
                <input
                  className="custom_checkbox"
                  type="checkbox"
                  name="filter_duration"
                  id="fldur1mob"
                  data-duration="duration-1"
                />
                <label htmlFor="fldur1mob">1 час</label>
              </div>
              <div className="procedure_duration_checkbox">
                <input
                  className="custom_checkbox"
                  type="checkbox"
                  name="filter_duration"
                  id="fldur2mob"
                  data-duration="duration-1:30"
                />
                <label htmlFor="fldur2mob">1 час 30 минут</label>
              </div>
              <div className="procedure_duration_checkbox">
                <input
                  className="custom_checkbox"
                  type="checkbox"
                  name="filter_duration"
                  id="fldur3mob"
                  data-duration="duration-2"
                />
                <label htmlFor="fldur3mob">2 часа</label>
              </div>
              <div className="procedure_duration_checkbox">
                <input
                  className="custom_checkbox"
                  type="checkbox"
                  name="filter_duration"
                  id="fldur4mob"
                  data-duration="duration-3"
                />
                <label htmlFor="fldur4mob">3 часа</label>
              </div>
            </div>
            <div className="procedure_kind procedure">
              <h2 className="filter_title">Вид услуги</h2>
              <div className="procedure_kind_radio">
                <input
                  className="custom_radio custom_radio_kind"
                  type="radio"
                  name="filter_kind"
                  id="flkind1mob"
                  data-kind="massage"
                />
                <label htmlFor="flkind1mob">Массаж</label>
              </div>
              <div className="procedure_for_whom_radio">
                <input
                  className="custom_radio custom_radio_kind"
                  type="radio"
                  name="filter_kind"
                  id="flkind2mob"
                  data-kind="spa"
                />
                <label htmlFor="flkind2mob">Спа</label>
              </div>
            </div>
            <div className="procedure_for_whom procedure">
              <h2 className="filter_title">Для кого:</h2>
              <div className="procedure_for_whom_radio">
                <input
                  className="custom_radio"
                  type="radio"
                  name="filter_for_whom"
                  id="flwhom1mob"
                  data-for_whom="women"
                />
                <label htmlFor="flwhom1mob">Для женщины</label>
              </div>
              <div className="procedure_for_whom_radio">
                <input
                  className="custom_radio"
                  type="radio"
                  name="filter_for_whom"
                  id="flwhom2mob"
                  data-for_whom="men"
                />
                <label htmlFor="flwhom2mob">Для мужчины</label>
              </div>
              <div className="procedure_for_whom_radio">
                <input
                  className="custom_radio"
                  type="radio"
                  name="filter_for_whom"
                  id="flwhom3mob"
                  data-for_whom="both"
                />
                <label htmlFor="flwhom3mob">Для двоих</label>
              </div>
            </div>
            <div className="procedure_price procedure">
              <h2 className="filter_title">Цена:</h2>
              <div className="filter_price_from_to">
                <input
                  className="filter_price_from mobile"
                  type="number"
                  name="filter_price_from"
                  id="flpricefrommob"
                  placeholder="От"
                />
                <input
                  className="filter_price_to mobile"
                  type="number"
                  name="filter_price_to"
                  id="flpricetomob"
                  placeholder="До"
                />
              </div>
            </div>
            <button type="button" className="submit_filters mobile btn">
              Применить
            </button>
            <button type="button" className="remove_filters mobile product_more">
              Очистить
            </button>
          </div>
        </div>
      </header>
      <div className={`mob_menu btn_to ${sidebar ? 'mob_menu_open' : ''}`}>
        <div id="menu_mob" className="fix_menu">
          <ul>
            <li>
              <a href="#s4">Массаж для женщины</a>
            </li>
            <li>
              <a href="#s5">Массаж для мужчины</a>
            </li>
            <li>
              <a href="#s6">Массаж для двоих</a>
            </li>
            <li>
              <Link href="/kursy-kosmetologa">Обучение косметологии</Link>
            </li>
            <li>
              <Link href="/kursy-massage">Обучение массажу</Link>
            </li>
            <li>
              <a href="#s8">Наш адрес в Адлере</a>
            </li>
            <li>
              <a href="tel:+79965091011">Позвонить</a>
            </li>
            <li>
              <a href="#s7">Отзывы</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}