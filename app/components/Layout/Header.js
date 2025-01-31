"use client";
import {useEffect, useState} from "react";
import {usePathname} from 'next/navigation';
import Link from "next/link";
import useProductStore from "../../stores/useProductStore";
import ServiceCard from "@/app/components/ServiceCard";

export default function Footer() {
  const pathname = usePathname();
  const [search, setSearch] = useState(false)
  const [sidebar, setSidebar] = useState(false)
  const {service} = useProductStore();




  return (
    <>
      <header>
        <div className="wrapper">
          <div className="header_items">
            <div className="header_logo">
              <a href={`${pathname}`}>
							<span>
								<img
                  src="img/logo.jpg"
                  alt="Массаж и Спа процедуры - Адлер"
                />
							</span>
                {pathname === '/' && (
                  <span>Атмосферные спа-салоны<br/>в Адлере</span>
                )}
                {pathname === '/kursy-kosmetologa' && (
                  <span>Обучение косметологии<br/>в Адлере</span>
                )}
                {pathname === '/kursy-massage' && (
                  <span>Обучение массажу<br/>в Адлере</span>
                )}
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
              <div className="header_searchbar">
                <div className='search_icon'>

                </div>
                <input
                  onClick={() => setSearch(true)}
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
              {service.map(service => (
                <ServiceCard key={service.id} service={service}/>
              ))}
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
                />       <label htmlFor="fldur2mob">1 час 30 минут</label>

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
          {pathname === '/' && (
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
          )}
          {pathname === '/kursy-kosmetologa' || pathname === '/kursy-massage'  && (
            <ul>
              <li>
                <a href="/kursy-massage">Курсы массажа</a>
              </li>
              <li>
                <a href="/kursy-kosmetologa">Курсы косметолога</a>
              </li>
              <li>
                <a href="#s8">Наш адрес в Адлере</a>
              </li>
              <li>
                <a href="/">Услуги Спа-салона</a>
              </li>
              <li>
                <a href="tel:+79965091011">Позвонить</a>
              </li>

            </ul>
          )}
        </div>
      </div>

    </>
  )
}