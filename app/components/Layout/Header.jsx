"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import CoursesCard from "@/app/components/CoursesCard";
import Link from "next/link";
import useProductStore from "../../stores/useProductStore";
import ServiceCard from "@/app/components/ServiceCard";
import Breadcrumbs from "@/app/components/Breadcrumb";

export default function Header() {
  const pathname = usePathname();
  const [search, setSearch] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const {
    service,
    courseOfMassage, // data for /kursy-massage
    courseOfCosmetics, // data for /kursy-kosmetologa
  } = useProductStore();
  const [citySearch, setCitySearch] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showCitySuggestions, setShowCitySuggestions] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const citySearchRef = useRef(null);

  // Simple transliteration function: Cyrillic to Latin.
  const transliterate = (text) => {
    const rusToEngMap = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
      'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
      'э': 'e', 'ю': 'yu', 'я': 'ya',
      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
      'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
      'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
      'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch',
      'Ш': 'Sh', 'Щ': 'Sch', 'Ъ': '', 'Ы': 'Y', 'Ь': '',
      'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };
    return text
      .split('')
      .map((char) => rusToEngMap[char] || char)
      .join('');
  };

  // Select data based on pathname.
  const getDataByPath = () => {
    if (pathname === "/kursy-massage") {
      return courseOfMassage;
    }
    if (pathname === "/kursy-kosmetologa") {
      return courseOfCosmetics;
    }
    return service;
  };

  // State to store filtered data.
  const [filteredServices, setFilteredServices] = useState(getDataByPath());

  // Update filtered data when store data or pathname changes.
  useEffect(() => {
    setFilteredServices(getDataByPath());
  }, [service, courseOfMassage, courseOfCosmetics, pathname]);

  // Debounced city search with dual query logic.
  const searchCities = useCallback(async (searchTerm) => {
    setIsLoadingCities(true);
    try {
      let whereObj = {};
      if (/[А-Яа-яЁё]/.test(searchTerm)) {
        whereObj = {
          $or: [
            { name: { $regex: `^${searchTerm}`, $options: "i" } },
            { name: { $regex: `^${transliterate(searchTerm)}`, $options: "i" } }
          ]
        };
      } else {
        whereObj = {
          name: { $regex: `^${searchTerm}`, $options: "i" }
        };
      }
      const where = encodeURIComponent(JSON.stringify(whereObj));
      const response = await fetch(
        `https://parseapi.back4app.com/classes/City?limit=5&order=name&keys=name,country,countryCode,cityId&where=${where}`,
        {
          headers: {
            "X-Parse-Application-Id": "8OqPs7Pwqv4IGArgwPU8NNR2DXazz13rfoLGqPQw",
            "X-Parse-Master-Key": "mU0TGsffKRtfn6l9KvLcPykabYyZwnywFUCyGtYv",
          },
        }
      );
      const data = await response.json();
      setCitySuggestions(data.results);
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setIsLoadingCities(false);
    }
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (citySearch.length > 2) {
        searchCities(citySearch);
        setShowCitySuggestions(true);
      } else {
        setShowCitySuggestions(false);
      }
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [citySearch, searchCities]);

  // Close suggestions when clicking outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (citySearchRef.current && !citySearchRef.current.contains(event.target)) {
        setShowCitySuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCitySelect = (city) => {
    setCitySearch(city.name);
    setShowCitySuggestions(false);
  };

  // Filter criteria state.
  const [filters, setFilters] = useState({
    durations: [], // e.g., ["1 час", "1.30 часа", "2 часа", "3 часа"]
    kind: "", // "massage" or "spa"
    forWhom: "", // "women", "men", or "both"
    priceFrom: "",
    priceTo: "",
  });

  // Handlers for filter changes.
  const handleDurationChange = (e) => {
    const durationValue = e.target.getAttribute("data-duration");
    setFilters((prev) => {
      const durations = e.target.checked
        ? [...prev.durations, durationValue]
        : prev.durations.filter((d) => d !== durationValue);
      return { ...prev, durations };
    });
  };

  const handleKindChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      kind: e.target.getAttribute("data-kind"),
    }));
  };

  const handleForWhomChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      forWhom: e.target.getAttribute("data-for_whom"),
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Apply filters to the selected data.
  const handleApplyFilters = () => {
    const filtered = getDataByPath().filter((item) => {
      // Duration filter
      if (filters.durations.length && !filters.durations.includes(item.duration)) {
        return false;
      }
      // Kind filter
      if (filters.kind && !item.category.includes(filters.kind)) {
        return false;
      }
      // For Whom filter
      if (filters.forWhom && !item.category.includes(filters.forWhom)) {
        return false;
      }
      // Price filter (adjust if price is an object)
      if (filters.priceFrom) {
        const priceValue = typeof item.price === "object" ? item.price.group : item.price;
        if (Number(priceValue) < Number(filters.priceFrom)) {
          return false;
        }
      }
      if (filters.priceTo) {
        const priceValue = typeof item.price === "object" ? item.price.group : item.price;
        if (Number(priceValue) > Number(filters.priceTo)) {
          return false;
        }
      }
      return true;
    });
    setFilteredServices(filtered);
  };

  // Clear filters.
  const handleClearFilters = () => {
    setFilters({
      durations: [],
      kind: "",
      forWhom: "",
      priceFrom: "",
      priceTo: "",
    });
    setFilteredServices(getDataByPath());
  };

  return (
    <>
      <header>
        <div className="wrapper">
          {/* Top row with Breadcrumbs and City Selector */}
          <div
            className="flex"
            style={{
              paddingTop: "15px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Breadcrumbs />
            {/* City Search */}
            <div
              className="city-search-container"
              ref={citySearchRef}
              style={{ position: "relative", marginLeft: "20px" }}
            >
              <input
                type="text"
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
                placeholder="Поиск города..."
                style={{
                  padding: "8px 12px",
                  width: "200px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                  backgroundColor: "#fff",
                }}
              />
              {showCitySuggestions && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    backgroundColor: "white",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    maxHeight: "300px",
                    overflowY: "auto",
                    zIndex: 1000,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  {isLoadingCities ? (
                    <div style={{ padding: "8px 12px", color: "#666" }}>Загрузка...</div>
                  ) : citySuggestions.length > 0 ? (
                    citySuggestions.map((city) => (
                      <div
                        key={city.cityId}
                        onClick={() => handleCitySelect(city)}
                        style={{
                          padding: "8px 12px",
                          cursor: "pointer",
                          fontSize: "14px",
                        }}
                      >
                        {city.name}, {city.country}
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: "8px 12px", color: "#666" }}>Город не найден</div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="header_items">
            <div className="header_logo">
              <a href={pathname}>
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
                <div className="procedure_kind_radio">
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
              {filteredServices && filteredServices.length > 0 ? (
                filteredServices.map((item) =>
                  // Render courses or service cards based on category.
                  item.category.includes("courses") ? (
                    <CoursesCard key={item.id} service={item} />
                  ) : (
                    <ServiceCard key={item.id} service={item} />
                  )
                )
              ) : (
                <p style={{ padding: "8px 12px" }}>Нет данных для отображения.</p>
              )}
            </div>
          </div>

          {/* Mobile Filters (if needed) */}
          <div className="search_menu_filters mobile">
            <div type="button" className="filters_close_btn"></div>
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

      {/* Mobile Menu */}
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
