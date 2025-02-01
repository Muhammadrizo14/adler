"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useProductStore from "../../stores/useProductStore";
import ServiceCard from "@/app/components/ServiceCard";

export default function Footer() {
  const pathname = usePathname();
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const { service } = useProductStore();

  // Filter criteria state.
  // Use the actual duration strings from your data.
  const [filters, setFilters] = useState({
    durations: [], // e.g. ["1 час", "1.30 часа", "2 часа", "3 часа"]
    kind: "",      // "massage" or "spa"
    forWhom: "",   // "women", "men", or "both"
    priceFrom: "",
    priceTo: "",
  });

  // Filtered services to display.
  const [filteredServices, setFilteredServices] = useState(service);

  // Update filteredServices when the service data changes.
  useEffect(() => {
    setFilteredServices(service);
  }, [service]);

  // Handler for duration checkboxes.
  const handleDurationChange = (e) => {
    const durationValue = e.target.getAttribute("data-duration");
    if (e.target.checked) {
      setFilters((prev) => ({
        ...prev,
        durations: [...prev.durations, durationValue],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        durations: prev.durations.filter((d) => d !== durationValue),
      }));
    }
  };

  // Handler for kind radio buttons.
  const handleKindChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      kind: e.target.getAttribute("data-kind"),
    }));
  };

  // Handler for forWhom radio buttons.
  const handleForWhomChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      forWhom: e.target.getAttribute("data-for_whom"),
    }));
  };

  // Handler for price input fields.
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Apply filters to the service list.
  const handleApplyFilters = () => {
    const filtered = service.filter((item) => {
      // Duration check: if any duration filters are selected,
      // the service duration must match one of the selected values.
      if (filters.durations.length && !filters.durations.includes(item.duration)) {
        return false;
      }
      // Kind check: if set, the service category must include the selected kind.
      if (filters.kind && !item.category.includes(filters.kind)) {
        return false;
      }
      // For Whom check: if set, the service category must include the selected forWhom.
      if (filters.forWhom && !item.category.includes(filters.forWhom)) {
        return false;
      }
      // Price check.
      if (filters.priceFrom && Number(item.price) < Number(filters.priceFrom)) {
        return false;
      }
      if (filters.priceTo && Number(item.price) > Number(filters.priceTo)) {
        return false;
      }
      return true;
    });
    setFilteredServices(filtered);
  };

  // Clear all filters.
  const handleClearFilters = () => {
    setFilters({
      durations: [],
      kind: "",
      forWhom: "",
      priceFrom: "",
      priceTo: "",
    });
    setFilteredServices(service);
  };

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="header_items">
            <div className="header_logo">
              <a href={`${pathname}`}>
                <span>
                  <img src="img/logo.jpg" alt="Массаж и Спа процедуры - Адлер" />
                </span>
                {pathname === "/" && (
                  <span>
                    Атмосферные спа-салоны
                    <br />
                    в Адлере
                  </span>
                )}
                {pathname === "/kursy-kosmetologa" && (
                  <span>
                    Обучение косметологии
                    <br />
                    в Адлере
                  </span>
                )}
                {pathname === "/kursy-massage" && (
                  <span>
                    Обучение массажу
                    <br />
                    в Адлере
                  </span>
                )}
              </a>
            </div>
            <div className="header_search_wrapper">
              <div className="header_filters_btn">
                <span className="header_filters_icon">
                  <img src="./img/filters_icon.webp" alt="filters_icon" />
                </span>
                <span className="header_close_icon">
                  <img src="img/close_icon.webp" alt="close_icon" />
                </span>
                <span className="filters_btn_title">Фильтры</span>
              </div>
              <div className="header_searchbar">
                <div className="search_icon"></div>
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
            <div
              className={`burger ${sidebar ? "burger_active" : ""}`}
              onClick={() => setSidebar((prevState) => !prevState)}
            >
              <div className="burger_icon"></div>
            </div>
          </div>

          {/* Filter & Search Menu */}
          <div className={`header_search_menu ${search ? "active" : ""}`}>
            <div className="search_menu_filters">
              {/* Duration Filter */}
              <div className="procedure_duration procedure">
                <h2 className="filter_title">Длительность процедуры:</h2>
                <div className="procedure_duration_checkbox">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name="filter_duration"
                    id="fldur1"
                    data-duration="1 час"
                    onChange={handleDurationChange}
                    checked={filters.durations.includes("1 час")}
                  />
                  <label htmlFor="fldur1">1 час</label>
                </div>
                <div className="procedure_duration_checkbox">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name="filter_duration"
                    id="fldur2"
                    data-duration="1.30 часа"
                    onChange={handleDurationChange}
                    checked={filters.durations.includes("1.30 часа")}
                  />
                  <label htmlFor="fldur2">1.30 часа</label>
                </div>
                <div className="procedure_duration_checkbox">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name="filter_duration"
                    id="fldur3"
                    data-duration="2 часа"
                    onChange={handleDurationChange}
                    checked={filters.durations.includes("2 часа")}
                  />
                  <label htmlFor="fldur3">2 часа</label>
                </div>
                <div className="procedure_duration_checkbox">
                  <input
                    className="custom_checkbox"
                    type="checkbox"
                    name="filter_duration"
                    id="fldur4"
                    data-duration="3 часа"
                    onChange={handleDurationChange}
                    checked={filters.durations.includes("3 часа")}
                  />
                  <label htmlFor="fldur4">3 часа</label>
                </div>
              </div>

              {/* Kind Filter */}
              <div className="procedure_kind procedure">
                <h2 className="filter_title">Вид услуги</h2>
                <div className="procedure_kind_radio">
                  <input
                    className="custom_radio custom_radio_kind"
                    type="radio"
                    name="filter_kind"
                    id="flkind1"
                    data-kind="massage"
                    onChange={handleKindChange}
                    checked={filters.kind === "massage"}
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
                    onChange={handleKindChange}
                    checked={filters.kind === "spa"}
                  />
                  <label htmlFor="flkind2">Спа</label>
                </div>
              </div>

              {/* For Whom Filter */}
              <div className="procedure_for_whom procedure">
                <h2 className="filter_title">Для кого:</h2>
                <div className="procedure_for_whom_radio">
                  <input
                    className="custom_radio"
                    type="radio"
                    name="filter_for_whom"
                    id="flwhom1"
                    data-for_whom="women"
                    onChange={handleForWhomChange}
                    checked={filters.forWhom === "women"}
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
                    onChange={handleForWhomChange}
                    checked={filters.forWhom === "men"}
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
                    onChange={handleForWhomChange}
                    checked={filters.forWhom === "both"}
                  />
                  <label htmlFor="flwhom3">Для двоих</label>
                </div>
              </div>

              {/* Price Filter */}
              <div className="procedure_price procedure">
                <h2 className="filter_title">Цена:</h2>
                <div className="filter_price_from_to">
                  <input
                    className="filter_price_from"
                    type="number"
                    name="priceFrom"
                    id="flpricefrom"
                    placeholder="От"
                    value={filters.priceFrom}
                    onChange={handlePriceChange}
                  />
                  <input
                    className="filter_price_to"
                    type="number"
                    name="priceTo"
                    id="flpriceto"
                    placeholder="До"
                    value={filters.priceTo}
                    onChange={handlePriceChange}
                  />
                </div>
              </div>

              {/* Apply and Clear Buttons */}
              <button
                type="button"
                className="submit_filters btn"
                onClick={handleApplyFilters}
              >
                Применить
              </button>
              <button
                type="button"
                className="remove_filters product_more"
                onClick={handleClearFilters}
              >
                Очистить
              </button>
            </div>

            <div
              type="button"
              className="search_close_btn"
              onClick={() => setSearch(false)}
            ></div>

            {/* Display filtered services */}
            <div className="search_menu_products">
              {filteredServices.map((serviceItem) => (
                <ServiceCard key={serviceItem.id} service={serviceItem} />
              ))}
            </div>
          </div>

          {/* Mobile Filters (example – similar logic can be applied) */}
          <div className="search_menu_filters mobile">
            <div type="button" className="filters_close_btn"></div>
            {/* You can duplicate the filter inputs here with the same onChange handlers */}
            <button
              type="button"
              className="submit_filters mobile btn"
              onClick={handleApplyFilters}
            >
              Применить
            </button>
            <button
              type="button"
              className="remove_filters mobile product_more"
              onClick={handleClearFilters}
            >
              Очистить
            </button>
          </div>
        </div>
      </header>
      <div className={`mob_menu btn_to ${sidebar ? "mob_menu_open" : ""}`}>
        <div id="menu_mob" className="fix_menu">
          {pathname === "/" && (
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
          {["/kursy-kosmetologa", "/kursy-massage"].includes(pathname) && (
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
  );
}
