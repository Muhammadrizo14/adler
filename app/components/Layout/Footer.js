"use client";

import {usePathname} from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const showFooterRow2 = !['/kursy-kosmetologa', '/kursy-massage'].includes(pathname);
  return (
    <footer>
      <div className="footer_row1">
        <div className="wrapper">
          <div className="footer_row1_content">
            <div className="footer_logo">
              <img src="img/logo.jpg" alt="logo"/>
            </div>
            <p>2008-2025 © Все права защищены</p>
          </div>
        </div>
      </div>
      {showFooterRow2 && (

        <div className="footer_row2">
          <div className="wrapper">
            <div className="footer_row2_content">
              <p>
                СПА Салон не является медицинским учреждением, не оказывает услуг
                по диагностике, лечению и профилактике любых заболеваний.
                Предлагаемые услуги классифицированы как бытовые и оказываются в
                соответствии с ГОСТ Р 55317-2012 "Услуги населению. СПА-услуги.
                Термины и определения", утв. Приказом Росстандарта от 29.11.2012 №
                1597-ст для добровольного применения и проводится в обстановке СПА
                с соблюдением определенных этических и эстетических норм с целью
                укрепления здоровья, моделирования фигуры и/или коррекции
                психоэмоционального состояния клиента. Услуги оказываются здоровым
                людям, и конечной целью СПА-массажа является гармонизация тела,
                сознания и души человека.
              </p>
            </div>
          </div>
        </div>
      )}

    </footer>
  )
}