// components/AdvancedFilters.jsx
"use client";

import React, { useState, useEffect } from "react";

// Define the initial filters state
const initialFilters = {
  // Цена: минимальное и максимальное значения
  price: { from: "", to: "" },

  // Для кого: массив выбранных значений
  forWhom: [], // Возможные значения: "Мужчины", "Женщины", "Для двоих", "Ребенку", "Семье"

  // Длительность: от и до (в минутах)
  duration: { from: "", to: "" },

  // Услуга: выбирается тип услуги
  service: [], // Возможные значения: "Массаж", "Спа процедуры", "Подарочный сертификат"

  // Если выбрана "Подарочный сертификат", выбираем подкатегории
  giftCertificate: [], // Возможные значения: "Новый год", "День Рождения", "14 февраля", "23 февраля", "8 марта"

  // Курсы обучения:
  courses: {
    cosmetology: [], // Возможные значения: "с Медицинским образованием", "без Медицинского образования", "Очное - в группе", "индивидуальное", "Заочное", "Онлайн", "с нуля", "повышение квалификации"
    massage: [] // Возможные значения: "с Медицинским образованием", "без Медицинского образования", "Очное - в группе", "индивидуальное", "Заочное", "Онлайн", "с нуля для новичков", "для повышения квалификации"
  },

  // Тату:
  tattoo: {
    tattoo: [], // Возможные значения: "с нуля для новичков", "для повышения квалификации", "в группе", "индивидуально"
    permanent: [] // Возможные значения: "с нуля для новичков", "для повышения квалификации", "в группе", "индивидуально"
  },

  // Отдельно: Форма обучения
  educationMode: [], // Возможные значения: "Очное", "Заочное", "Онлайн"

  // Категория: Формат обучения
  trainingFormat: [] // Возможные значения: "В группе", "Индивидуально"
};

export default function AdvancedFilters({ onFilterChange, resetFlag }) {
  const [filters, setFilters] = useState(initialFilters);

  // Reset filters when resetFlag changes
  useEffect(() => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetFlag]);

  // Update a top-level field (price, duration)
  const handleInputChange = (e, field, subField = null) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (subField) {
        newFilters[field] = { ...prev[field], [subField]: value };
      } else {
        newFilters[field] = value;
      }
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  // Update an array field (e.g. forWhom, service, giftCertificate, educationMode, trainingFormat)
  const handleCheckboxToggle = (field, option, parentField = null) => {
    setFilters((prev) => {
      let newFilters = { ...prev };

      if (parentField) {
        // For nested arrays like courses.cosmetology, courses.massage, tattoo.tattoo, tattoo.permanent
        const currentArray = newFilters[parentField][field] || [];
        if (currentArray.includes(option)) {
          newFilters[parentField][field] = currentArray.filter((item) => item !== option);
        } else {
          newFilters[parentField][field] = [...currentArray, option];
        }
      } else {
        // For top-level array fields (forWhom, service, giftCertificate, educationMode, trainingFormat)
        const currentArray = newFilters[field] || [];
        if (currentArray.includes(option)) {
          newFilters[field] = currentArray.filter((item) => item !== option);
        } else {
          newFilters[field] = [...currentArray, option];
        }
      }
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  return (
    <div className="advanced-filters">
      {/* Цена */}
      <section>
        <h3>Цена</h3>
        <div>
          <label>
            От:{" "}
            <input
              type="number"
              name="priceFrom"
              value={filters.price.from}
              onChange={(e) => handleInputChange(e, "price", "from")}
            />
          </label>
          <label>
            До:{" "}
            <input
              type="number"
              name="priceTo"
              value={filters.price.to}
              onChange={(e) => handleInputChange(e, "price", "to")}
            />
          </label>
        </div>
      </section>

      {/* Для кого */}
      <section>
        <h3>Для кого</h3>
        {["Мужчины", "Женщины", "Для двоих", "Ребенку", "Семье"].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={filters.forWhom.includes(option)}
              onChange={() => handleCheckboxToggle("forWhom", option)}
            />
            {option}
          </label>
        ))}
      </section>

      {/* Длительность */}
      <section>
        <h3>Длительность (в минутах)</h3>
        <div>
          <label>
            От:{" "}
            <input
              type="number"
              name="durationFrom"
              value={filters.duration.from}
              onChange={(e) => handleInputChange(e, "duration", "from")}
            />
          </label>
          <label>
            До:{" "}
            <input
              type="number"
              name="durationTo"
              value={filters.duration.to}
              onChange={(e) => handleInputChange(e, "duration", "to")}
            />
          </label>
        </div>
      </section>

      {/* Услуга */}
      <section>
        <h3>Услуга</h3>
        {["Массаж", "Спа процедуры", "Подарочный сертификат"].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={filters.service.includes(option)}
              onChange={() => handleCheckboxToggle("service", option)}
            />
            {option}
          </label>
        ))}

        {/* Если выбрана "Подарочный сертификат", отображаем подкатегории */}
        {filters.service.includes("Подарочный сертификат") && (
          <div style={{ marginLeft: "1em" }}>
            <h4>Подарочный сертификат</h4>
            {["Новый год", "День Рождения", "14 февраля", "23 февраля", "8 марта"].map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={filters.giftCertificate.includes(option)}
                  onChange={() => handleCheckboxToggle("giftCertificate", option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </section>

      {/* Курсы обучения */}
      <section>
        <h3>Курсы обучения</h3>
        {/* Подкатегория: Косметология */}
        <div>
          <h4>Косметология</h4>
          {[
            "с Медицинским образованием",
            "без Медицинского образования",
            "Очное - в группе",
            "индивидуальное",
            "Заочное",
            "Онлайн",
            "с нуля",
            "повышение квалификации"
          ].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={filters.courses.cosmetology.includes(option)}
                onChange={() => handleCheckboxToggle("cosmetology", option, "courses")}
              />
              {option}
            </label>
          ))}
        </div>
        {/* Подкатегория: Массаж */}
        <div>
          <h4>Массаж</h4>
          {[
            "с Медицинским образованием",
            "без Медицинского образованием",
            "Очное - в группе",
            "индивидуальное",
            "Заочное",
            "Онлайн",
            "с нуля для новичков",
            "для повышения квалификации"
          ].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={filters.courses.massage.includes(option)}
                onChange={() => handleCheckboxToggle("massage", option, "courses")}
              />
              {option}
            </label>
          ))}
        </div>
      </section>

      {/* Тату */}
      <section>
        <h3>Тату</h3>
        {/* Подкатегория: Татуировка */}
        <div>
          <h4>Татуировка</h4>
          {[
            "с нуля для новичков",
            "для повышения квалификации",
            "в группе",
            "индивидуально"
          ].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={filters.tattoo.tattoo.includes(option)}
                onChange={() => handleCheckboxToggle("tattoo", option, "tattoo")}
              />
              {option}
            </label>
          ))}
        </div>
        {/* Подкатегория: Перманентный макияж */}
        <div>
          <h4>Перманентный макияж</h4>
          {[
            "с нуля для новичков",
            "для повышения квалификации",
            "в группе",
            "индивидуально"
          ].map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={filters.tattoo.permanent.includes(option)}
                onChange={() => handleCheckboxToggle("permanent", option, "tattoo")}
              />
              {option}
            </label>
          ))}
        </div>
      </section>

      {/* Форма обучения */}
      <section>
        <h3>Форма обучения</h3>
        {["Очное", "Заочное", "Онлайн"].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={filters.educationMode.includes(option)}
              onChange={() => handleCheckboxToggle("educationMode", option)}
            />
            {option}
          </label>
        ))}
      </section>

      {/* Формат обучения */}
      <section>
        <h3>Формат обучения</h3>
        {["В группе", "Индивидуально"].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={filters.trainingFormat.includes(option)}
              onChange={() => handleCheckboxToggle("trainingFormat", option)}
            />
            {option}
          </label>
        ))}
      </section>
    </div>
  );
}
