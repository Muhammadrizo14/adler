"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import CoursesCard from "@/app/components/CoursesCard";
import ServiceCard from "@/app/components/ServiceCard";
import Breadcrumbs from "@/app/components/Breadcrumb";
import Link from "next/link";
import useProductStore from "../../stores/useProductStore";

export default function Header() {
  const pathname = usePathname();
  const { service, courseOfMassage, courseOfCosmetics } = useProductStore();
  const [filterService, setFilterService] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  // For region search (unchanged)
  const regions = [

    "Республика Адыгея",
    "Республика Алтай",
    "Республика Башкортостан",
    "Республика Бурятия",
    "Чеченская Республика",
    "Чувашская Республика",
    "Республика Дагестан",
    "Республика Ингушетия",
    "Кабардино-Балкарская Республика",
    "Республика Калмыкия",
    "Карачаево-Черкесская Республика",
    "Республика Карелия",
    "Республика Коми",
    "Республика Марий Эл",
    "Республика Мордовия",
    "Республика Северная Осетия — Алания",
    "Республика Татарстан",
    "Республика Тыва",
    "Удмуртская Республика",
    "Республика Хакасия",
    "Республика Крым",
    "Амурская область",
    "Архангельская область",
    "Астраханская область",
    "Белгородская область",
    "Брянская область",
    "Челябинская область",
    "Иркутская область",
    "Ивановская область",
    "Калининградская область",
    "Калужская область",
    "Кемеровская область",
    "Кировская область",
    "Костромская область",
    "Курганская область",
    "Курская область",
    "Ленинградская область",
    "Липецкая область",
    "Магаданская область",
    "Московская область",
    "Мурманская область",
    "Нижегородская область",
    "Новгородская область",
    "Новосибирская область",
    "Омская область",
    "Оренбургская область",
    "Орловская область",
    "Пензенская область",
    "Псковская область",
    "Ростовская область",
    "Рязанская область",
    "Самарская область",
    "Саратовская область",
    "Сахалинская область",
    "Свердловская область",
    "Смоленская область",
    "Тамбовская область",
    "Томская область",
    "Тульская область",
    "Тверская область",
    "Тюменская область",
    "Ульяновская область",
    "Владимирская область",
    "Волгоградская область",
    "Вологодская область",
    "Воронежская область",
    "Ярославская область",
    "Алтайский край",
    "Камчатский край",
    "Хабаровский край",
    "Краснодарский край",
    "Красноярский край",
    "Пермский край",
    "Приморский край",
    "Ставропольский край",
    "Забайкальский край",
    "Москва",
    "Санкт-Петербург",
    "Севастополь",
    "Еврейская автономная область",
    "Чукотский автономный округ",
    "Ханты-Мансийский автономный округ — Югра",
    "Ненецкий автономный округ",
    "Ямало-Ненецкий автономный округ"
  ];
  const [regionSearch, setRegionSearch] = useState("");
  const [filteredRegions, setFilteredRegions] = useState([]);
  const regionSearchRef = useRef(null);

  useEffect(() => {
    if (regionSearch.trim() !== "") {
      const filtered = regions.filter((region) =>
        region.toLowerCase().includes(regionSearch.toLowerCase())
      );
      setFilteredRegions(filtered);
    } else {
      setFilteredRegions([]);
    }
  }, [regionSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (regionSearchRef.current && !regionSearchRef.current.contains(event.target)) {
        setFilteredRegions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Our filters state.
  // For courses pages ("/kursy-massage" and "/kursy-kosmetologa") we use tag-based filters.
  // For the homepage (pathname === "/") we filter by durations, kind, and forWhom.
  // Plus a common price filter.
  const [filters, setFilters] = useState({
    // Courses pages filters:
    medicalEducation: "", // "medical" or "non-medical"
    learningFormat: "",   // "group", "individual", "distance", "online"
    courseType: "",       // "beginner" ("с нуля") or "advanced" ("повышение квалификации")
    mainCategory: "",     // Only used on the massage page (e.g. "massage", "tattoo", "pmu")
    subCategory: "",      // For massage page: "group" or "individual"
    // Common price filter:
    priceFrom: "",
    priceTo: "",
    // Home page filters:
    durations: [],
    kind: "",    // e.g. "massage", "spa"
    forWhom: ""  // will match if the item's category includes "women" or "men"
  });

  // This will hold the filtered data to be rendered.
  const [filteredServices, setFilteredServices] = useState([]);

  // Returns the full data for the current page.
  const getDataByPath = () => {
    if (pathname === "/kursy-massage") {
      return courseOfMassage;
    }
    if (pathname === "/kursy-kosmetologa") {
      return courseOfCosmetics;
    }
    return service;
  };

  // Filtering logic: runs whenever filters, data, or pathname change.
  useEffect(() => {
    const data = getDataByPath();
    let filtered = data;

    // --- For Courses Pages ("/kursy-massage" and "/kursy-kosmetologa") ---
    if (pathname === "/kursy-kosmetologa" || pathname === "/kursy-massage") {
      // Filter by Medical Education.
      if (filters.medicalEducation) {
        if (filters.medicalEducation === "medical") {
          filtered = filtered.filter(item =>
            item.tags && item.tags.includes("с Медицинским образованием")
          );
        } else if (filters.medicalEducation === "non-medical") {
          filtered = filtered.filter(item =>
            item.tags && item.tags.includes("без Медицинского образования")
          );
        }
      }
      // Filter by Learning Format.
      if (filters.learningFormat) {
        switch (filters.learningFormat) {
          case "group":
            filtered = filtered.filter(item =>
              item.tags && item.tags.includes("группа")
            );
            break;
          case "individual":
            filtered = filtered.filter(item =>
              item.tags && item.tags.includes("индивидуальное")
            );
            break;
          case "distance":
            filtered = filtered.filter(item =>
              item.tags && item.tags.includes("Заочное")
            );
            break;
          case "online":
            filtered = filtered.filter(item =>
              item.tags && item.tags.includes("Онлайн")
            );
            break;
          default:
            break;
        }
      }
      // Filter by Course Type.
      if (filters.courseType) {
        if (filters.courseType === "beginner") {
          filtered = filtered.filter(item =>
            item.tags && item.tags.includes("с нуля")
          );
        } else if (filters.courseType === "advanced") {
          filtered = filtered.filter(item =>
            item.tags && item.tags.includes("повышение квалификации")
          );
        }
      }
      // For massage page: filter by mainCategory and optionally subCategory.
      if (pathname === "/kursy-massage" && filters.mainCategory) {
        // Example: check for the "Массаж" tag.
        filtered = filtered.filter(item =>
          item.tags && item.tags.includes("Массаж")
        );
        if (filters.subCategory) {
          if (filters.subCategory === "group") {
            filtered = filtered.filter(item =>
              item.tags && item.tags.includes("группа")
            );
          } else if (filters.subCategory === "individual") {
            filtered = filtered.filter(item =>
              item.tags && item.tags.includes("индивидуальное")
            );
          }
        }
      }
    }

    // --- For Home Page (pathname === "/") ---
    if (pathname === "/") {
      // Filter by Duration.
      if (filters.durations.length > 0) {
        filtered = filtered.filter(item =>
          filters.durations.some(duration =>
            item.duration && item.duration.includes(duration)
          )
        );
      }
      // Filter by Kind.
      if (filters.kind) {
        filtered = filtered.filter(item =>
          item.category && item.category.includes(filters.kind)
        );
      }
      // Filter by "For Whom": Here we check if the item's category includes the filter value ("women" or "men").
      if (filters.forWhom) {
        filtered = filtered.filter(item =>
          item.category && item.category.includes(filters.forWhom)
        );
      }
    }

    // --- Common Price Filter for All Pages ---
    if (filters.priceFrom) {
      filtered = filtered.filter(item => {
        const prices = typeof item.price === "object"
          ? Object.values(item.price).filter(p => p != null)
          : [item.price];
        return prices.some(price => price >= parseInt(filters.priceFrom, 10));
      });
    }
    if (filters.priceTo) {
      filtered = filtered.filter(item => {
        const prices = typeof item.price === "object"
          ? Object.values(item.price).filter(p => p != null)
          : [item.price];
        return prices.some(price => price <= parseInt(filters.priceTo, 10));
      });
    }

    setFilteredServices(filtered);
  }, [filters, service, courseOfMassage, courseOfCosmetics, pathname]);

  // Handlers for filter changes.
  const handlePriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDurationChange = (e) => {
    const duration = e.target.getAttribute("data-duration");
    setFilters((prev) => {
      let newDurations = [...prev.durations];
      if (e.target.checked) {
        newDurations.push(duration);
      } else {
        newDurations = newDurations.filter((d) => d !== duration);
      }
      return { ...prev, durations: newDurations };
    });
  };

  const handleKindChange = (e) => {
    const kind = e.target.getAttribute("data-kind");
    setFilters((prev) => ({ ...prev, kind }));
  };

  const handleForWhomChange = (e) => {
    const forWhom = e.target.getAttribute("data-for_whom");
    setFilters((prev) => ({ ...prev, forWhom }));
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      medicalEducation: "",
      learningFormat: "",
      courseType: "",
      mainCategory: "",
      subCategory: "",
      priceFrom: "",
      priceTo: "",
      durations: [],
      kind: "",
      forWhom: ""
    });
  };

  // Filtering is reactive so handleApplyFilters can be an empty function.
  const handleApplyFilters = () => {};

  // Update filtered services when data changes.
  useEffect(() => {
    setFilteredServices(getDataByPath());
  }, [service, courseOfMassage, courseOfCosmetics, pathname]);

  return (
    <>
      <header>
        <div className="wrapper">
          {/* Top row with Breadcrumbs and Region Selector */}
          <div
            className="flex"
            style={{
              paddingTop: "15px",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Breadcrumbs />
            <div
              className="region-search-container"
              ref={regionSearchRef}
              style={{ position: "relative", marginLeft: "20px" }}
            >
              <input
                type="text"
                value={regionSearch}
                onChange={(e) => setRegionSearch(e.target.value)}
                placeholder="Поиск региона..."
                style={{
                  padding: "8px 12px",
                  width: "200px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                  backgroundColor: "#fff"
                }}
              />
              {filteredRegions.length > 0 && (
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
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                  }}
                >
                  {filteredRegions.map((region, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setRegionSearch(region);
                        setFilteredRegions([]);
                      }}
                      style={{
                        padding: "8px 12px",
                        cursor: "pointer",
                        fontSize: "14px"
                      }}
                    >
                      {region}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Header items: logo, search, contact, burger menu */}
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
                  onClick={() => setFilterService(true)}
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
              onClick={() => setSidebar(prevState => !prevState)}
            >
              <div className="burger_icon"></div>
            </div>
          </div>

          {/* Filter & Search Menu */}
          <div className={`header_search_menu ${filterService ? "active" : ""}`}>
            <div className="search_menu_filters">
              {/* For Cosmetology Courses */}
              {pathname === "/kursy-kosmetologa" && (
                <>
                  {/* Cosmetology Courses Filters */}
                  <div className="procedure procedure_medical">
                    <h2 className="filter_title">Медицинское образование:</h2>
                    <div className="procedure_medical_radio">
                      <input
                        type="radio"
                        className="custom_radio"
                        name="medicalEducation"
                        id="med_yes"
                        value="medical"
                        onChange={() => handleFilterChange("medicalEducation", "medical")}
                        checked={filters.medicalEducation === "medical"}
                      />
                      <label htmlFor="med_yes">С медицинским образованием</label>
                    </div>
                    <div className="procedure_medical_radio">
                      <input
                        type="radio"
                        className="custom_radio"
                        name="medicalEducation"
                        id="med_no"
                        value="non-medical"
                        onChange={() => handleFilterChange("medicalEducation", "non-medical")}
                        checked={filters.medicalEducation === "non-medical"}
                      />
                      <label htmlFor="med_no">Без медицинского образования</label>
                    </div>
                  </div>

                  <div className="procedure procedure_learning_format">
                    <h2 className="filter_title">Формат обучения:</h2>
                    {[
                      { value: "distance", label: "Заочное" },
                      { value: "online", label: "Онлайн" },
                      { value: "group", label: "Очное в группе" },
                      { value: "individual", label: "Очное индивидуальное" }
                    ].map((fmt) => (
                      <div key={fmt.value} className="procedure_learning_checkbox">
                        <input
                          type="radio"
                          className="custom_radio"
                          name="learningFormat"
                          id={`format_${fmt.value}`}
                          value={fmt.value}
                          onChange={() => handleFilterChange("learningFormat", fmt.value)}
                          checked={filters.learningFormat === fmt.value}
                        />
                        <label htmlFor={`format_${fmt.value}`}>{fmt.label}</label>
                      </div>
                    ))}
                  </div>

                  <div className="procedure procedure_course_type">
                    <h2 className="filter_title">Тип курса:</h2>
                    {[
                      { value: "beginner", label: "С нуля для новичков" },
                      { value: "advanced", label: "Для повышения квалификации" }
                    ].map((type) => (
                      <div key={type.value} className="procedure_course_checkbox">
                        <input
                          type="radio"
                          className="custom_radio"
                          name="courseType"
                          id={`course_${type.value}`}
                          value={type.value}
                          onChange={() => handleFilterChange("courseType", type.value)}
                          checked={filters.courseType === type.value}
                        />
                        <label htmlFor={`course_${type.value}`}>{type.label}</label>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {pathname === "/kursy-massage" && (
                <>
                  {/* Massage Courses Filters */}
                  <div className="procedure procedure_medical">
                    <h2 className="filter_title">Медицинское образование:</h2>
                    {["medical", "non-medical"].map((type) => (
                      <div key={type} className="procedure_medical_radio">
                        <input
                          type="radio"
                          className="custom_radio"
                          name="medicalEducation"
                          id={`med-${type}`}
                          value={type}
                          onChange={() => handleFilterChange("medicalEducation", type)}
                          checked={filters.medicalEducation === type}
                        />
                        <label htmlFor={`med-${type}`}>
                          {type === "medical" ? "С медицинским образованием" : "Без медицинского образования"}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="procedure procedure_category">
                    <h2 className="filter_title">Основная категория:</h2>
                    {["massage", "tattoo", "pmu"].map((cat) => (
                      <div key={cat} className="procedure_category_radio">
                        <input
                          type="radio"
                          className="custom_radio"
                          name="mainCategory"
                          id={`cat-${cat}`}
                          value={cat}
                          onChange={() =>
                            setFilters((prev) => ({
                              ...prev,
                              mainCategory: cat,
                              subCategory: ""
                            }))
                          }
                          checked={filters.mainCategory === cat}
                        />
                        <label htmlFor={`cat-${cat}`}>
                          {{
                            massage: "Массаж",
                            tattoo: "Татуировка",
                            pmu: "Перманентный макияж"
                          }[cat]}
                        </label>
                      </div>
                    ))}
                  </div>

                  {filters.mainCategory && (
                    <div className="procedure procedure_subcategory">
                      <h2 className="filter_title">Подкатегория:</h2>
                      {[
                        { value: "beginner", label: "С нуля для новичков" },
                        { value: "advanced", label: "Для повышения квалификации" },
                        { value: "group", label: "В группе" },
                        { value: "individual", label: "Индивидуально" }
                      ].map((sub) => (
                        <div key={sub.value} className="procedure_subcategory_checkbox">
                          <input
                            type="radio"
                            className="custom_radio"
                            name="subCategory"
                            id={`sub-${sub.value}`}
                            value={sub.value}
                            onChange={() => handleFilterChange("subCategory", sub.value)}
                            checked={filters.subCategory === sub.value}
                          />
                          <label htmlFor={`sub-${sub.value}`}>{sub.label}</label>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="procedure procedure_format">
                    <h2 className="filter_title">Формат обучения:</h2>
                    {[
                      { value: "group", label: "Очное в группе" },
                      { value: "individual", label: "Очное индивидуальное" },
                      { value: "distance", label: "Заочное" },
                      { value: "online", label: "Онлайн" }
                    ].map((fmt) => (
                      <div key={fmt.value} className="procedure_format_checkbox">
                        <input
                          type="radio"
                          className="custom_radio"
                          name="learningFormat"
                          id={`fmt-${fmt.value}`}
                          value={fmt.value}
                          onChange={() => handleFilterChange("learningFormat", fmt.value)}
                          checked={filters.learningFormat === fmt.value}
                        />
                        <label htmlFor={`fmt-${fmt.value}`}>{fmt.label}</label>
                      </div>
                    ))}
                  </div>

                  <div className="procedure procedure_course_type">
                    <h2 className="filter_title">Тип курса:</h2>
                    {[
                      { value: "beginner", label: "С нуля для новичков" },
                      { value: "advanced", label: "Для повышения квалификации" }
                    ].map((type) => (
                      <div key={type.value} className="procedure_course_checkbox">
                        <input
                          type="radio"
                          className="custom_radio"
                          name="courseType"
                          id={`mcourse-${type.value}`}
                          value={type.value}
                          onChange={() => handleFilterChange("courseType", type.value)}
                          checked={filters.courseType === type.value}
                        />
                        <label htmlFor={`mcourse-${type.value}`}>{type.label}</label>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {pathname === "/" && (
                <>
                  <div className="procedure_duration procedure">
                    <h2 className="filter_title">Длительность процедуры:</h2>
                    {["1 час", "1.30 часа", "2 часа", "3 часа"].map((dur) => (
                      <div key={dur} className="procedure_duration_checkbox">
                        <input
                          className="custom_checkbox"
                          type="checkbox"
                          name="filter_duration"
                          id={`fldur-${dur}`}
                          data-duration={dur}
                          onChange={handleDurationChange}
                          checked={filters.durations.includes(dur)}
                        />
                        <label htmlFor={`fldur-${dur}`}>{dur}</label>
                      </div>
                    ))}
                  </div>
                  <div className="procedure_kind procedure">
                    <h2 className="filter_title">Вид услуги</h2>
                    {["massage", "spa"].map((kind) => (
                      <div key={kind} className="procedure_kind_radio">
                        <input
                          className="custom_radio custom_radio_kind"
                          type="radio"
                          name="filter_kind"
                          id={`kind-${kind}`}
                          data-kind={kind}
                          onChange={handleKindChange}
                          checked={filters.kind === kind}
                        />
                        <label htmlFor={`kind-${kind}`}>
                          {kind === "massage" ? "Массаж" : "Спа"}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="procedure_for_whom procedure">
                    <h2 className="filter_title">Для кого:</h2>
                    {[
                      { id: "women", label: "Для женщины" },
                      { id: "men", label: "Для мужчины" },
                      { id: "both", label: "Для двоих" }
                    ].map((item) => (
                      <div key={item.id} className="procedure_for_whom_radio">
                        <input
                          className="custom_radio"
                          type="radio"
                          name="filter_for_whom"
                          id={`forWhom-${item.id}`}
                          data-for_whom={item.id}
                          onChange={handleForWhomChange}
                          checked={filters.forWhom === item.id}
                        />
                        <label htmlFor={`forWhom-${item.id}`}>{item.label}</label>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Price Filter (common for all pages) */}
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
              onClick={() => setFilterService(false)}
            ></div>

            {/* Display Filtered Services */}
            <div className="search_menu_products">
              {filteredServices && filteredServices.length > 0 ? (
                filteredServices.map((item) =>
                  item.category && item.category.includes("courses") ? (
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
