"use client";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import {useState} from "react";

export default function Page() {
  const [popup, setPopup] = useState(false)
  return (
    <div>
      <div className="mob_menu btn_to">
        <div id="menu_mob" className="fix_menu">
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
              <a href="https://adler.spahit.com">Услуги Спа-салона</a>
            </li>
            <li>
              <a href="tel:+79965091011">Позвонить</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="s1" id="s1">
        <div className="s1_bg_line">
          <img src="/img/line.png" alt="line"/>
          <img src="/img/line.png" alt="line"/>
        </div>
        <div className="wrapper">
          <div className="s1_items">
            <div className="s1_left">
              <h1>Курсы массажа в Адлере</h1>
              <h2>
                Наша школа массажа дает возможность пройти углубленный курс
                обучения массажу, как в режиме онлайн, так и очно
              </h2>
              <div className="s1_btn btn_to">
                <a href="#s2" className="btn">Выбрать курс</a>
              </div>
            </div>
            <div className="s1_right">
              <img
                src="/img/kartinka_massage.jpg"
                alt="обучение массажу в Адлере"
              />
            </div>
          </div>
        </div>
      </div>
      <h2>Обучение массажу - Адлер</h2>
      <div className="subtitle">
        <p>
          Каждый специалист в области массажа обязан владеть специальными навыками
          и даже приёмами мануальной терапии. Наша школа массажа дает возможность
          пройти углубленный курс по обучению массажу, как в режиме онлайн, так и
          очно. Медицинский массаж - это действенная и эффективная оздоровительная
          методика для поддержания здоровья, молодости и стремительной
          реабилитации после жизненных недугов. Обучающий курс помогает создавать
          новые кадры для работы в сфере оздоровительной медицины и реабилитации,
          а для проведения профессиональных сеансов нужны грамотно обученные
          помощники, как с профильным медицинским образованием, так и с
          естественным желанием помогать и осваивать новые технологии без
          медицинского образования.
        </p>
        <p>
          Пройдя обучение курсам массажа, обучающийся получает специальный
          сертификат, или диплом Государственного образца и бесценные навыки самым
          востребованным техникам и методам, позволяющих помогать людям в
          всевозможных сферах, проводить детский сеанс или курс для взрослых. Наши
          преподаватели - это люди с большим опытом, которые научат помогать
          клиентам разностороннего профиля: Реабилитация после травм. Поддержание
          здоровья. Оздоровительные сеансы. Массаж лица - молодость кожи.
          Процедуры для укрепления костно-мышечного скелета взрослым и детям.
        </p>
        <p>
          Также, на занятиях вы овладеваете техниками массажа разного направления
          для отдельных частей тела. Стать массажистом может каждый, кто пожелает,
          а для этого следует пройти специализированное обучение под руководством
          наших мастеров. В процессе курса вы получаете не только теоретические
          знания, но и овладеваете практическими методиками относительно
          стандартных и инновационных тактик, с отработкой приемов и постановкой
          руки на моделях. Столь грамотный и углубленный подход открывает
          возможность перед учениками нашей школы овладеть как классическими, так
          и эстетическими приемами.
        </p>
        <p>
          Теоретические и практические занятия проводит опытный преподаватель,
          который исключительным образом находит индивидуальный подход к каждому,
          рассказывает все тонкости данной профессии по общему или отдельному
          узкому профилю, озвучивает секреты мануальных техник. Все это позволяет
          не только получить диплом по окончанию обучения, но и вырастить из
          ученика мастера высочайшего класса, а практикующим массажистам повысить
          уровень квалификации. По окончанию курса выдаются документы, дающие
          возможность законно предоставлять услуги в частной сфере или работать с
          официальным оформлением. После обучения курсу массажа в нашей школе,
          полученная вами новая профессия будет вызывать только положительные
          эмоции!
        </p>
      </div>
      <div className="s4" id="s2">
        <div className="s1_bg_line_top">
          <img src="/img/line.png" alt="line"/>
          <img src="/img/line.png" alt="line"/>
        </div>
        <div className="s1_bg_line">
          <img src="/img/line.png" alt="line"/>
          <img src="/img/line.png" alt="line"/>
        </div>
        <div className="products">
          <div className="product card">
            <div className="product_img">
              <div className="screen_img">
                <img
                  className="product-img"
                  src="/img/kurs1/1.jpg"
                  alt="курсы детского массажа в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы Детского массажа
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >72 ак.часа</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистационно 12000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 29000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 39000₽</strong
                >
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
                        src="/img/kurs1/1.jpg"
                        alt="обучение детскому массажу в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Курсы Детского массажа
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >72 ак.часа</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистационно 12000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 29000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 39000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>Анатомия ребёнка;</li>
                            <li>показания противопоказания;</li>
                            <li>
                              базовые комплексы массажа для детей от 1 месяца до 1
                              года, с 3 до 6 и с 7 до 10 лет;
                            </li>
                            <li>
                              массаж и гимнастика для детей от рождения до 3
                              месяцев, от 3 до 6 и от 6 до 12 месяцев;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>
                              рекомендации по работе и общению с ребенком от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>приёмы детского массажа;</li>
                            <li>детский массаж по частям тела;</li>
                            <li>
                              массаж и гимнастика при заболеваниях и дисфункциях
                              ЖКТ у детей первого года жизни (колики, запоры);
                            </li>
                            <li>
                              массаж и гимнастика при синдроме мышечной гипотонии,
                              гипертонии, асимметрии мышечного тонуса, врожденной
                              мышечной кривошеи, бронхите, пневмонии,
                              перкуссионно-дренажный массаж;
                            </li>
                            <li>
                              массаж и гимнастика при врожденных и приобретенных
                              деформациях ступни: плоскостопии, врожденной
                              косолапости, плоско-вальгусной установке ступней,
                              Х-образном и О-образном искривлении;
                            </li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/2.jpg"
                  alt="курсы медицинского массажа в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы Медицинского массажа
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >288 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 55000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 75000₽</strong
                >
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
                        src="/img/kurs1/2.jpg"
                        alt="обучение медицинскому массажу в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Курсы Медицинского массажа
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >288 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 55000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 75000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Анатомия и физиология для «Специалиста по
                              медицинскому массажу»;
                            </li>
                            <li>
                              правовое обеспечение профессиональной деятельности
                              «Специалиста по медицинскому массажу»;
                            </li>
                            <li>
                              инфекционная безопасность и инфекционный контроль;
                            </li>
                            <li>
                              показания противопоказания для Медицинского массажа;
                            </li>
                            <li>
                              Основы анатомии, физиологии и биомеханики человека;
                            </li>
                            <li>
                              Общая методика и техника классического массажа;
                            </li>
                            <li>
                              Правила построения процедуры и курса медицинского
                              массажа;
                            </li>
                            <li>
                              Приемы медицинского массажа, их физиологическое
                              действие на пациента;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>
                              Проведение обследования пациента с целью определения
                              методики проведения медицинского массажа;
                            </li>
                            <li>
                              Выполнение медицинского массажа с учетом
                              индивидуальных особенностей и возраста пациента и
                              контроль его эффективности;
                            </li>
                            <li>
                              Массаж при заболеваниях опорно – двигательного
                              аппарата;
                            </li>
                            <li>
                              Массаж при заболеваниях желудочно – кишечного
                              тракта;
                            </li>
                            <li>
                              Массаж при заболеваниях почек и мочевыделительного
                              тракта;
                            </li>
                            <li>
                              Массаж при заболеваниях сердечно – сосудистой
                              системы;
                            </li>
                            <li>
                              Массаж при заболеваниях периферической нервной
                              системы;
                            </li>
                            <li>
                              Массаж при заболеваниях центральной нервной системы;
                            </li>
                            <li>
                              Массаж при заболеваниях женских половых органов;
                            </li>
                            <li>
                              Массаж при заболеваниях периферических сосудов;
                            </li>
                            <li>Массаж волосистой части головы;</li>
                            <li>Вакуумный массаж;</li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/3.jpg"
                  alt="курсы классического массажа лица в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы Классического массажа лица
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часов </strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/3.jpg"
                        alt="обучение классическому массажу лица в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Курсы Классического массажа лица
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часов </strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 12000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              введение в анатомические и физиологические
                              особенности;
                            </li>
                            <li>показания противопоказания;</li>
                            <li>влияние массажа;</li>
                            <li>подготовка к массажу;</li>
                            <li>асептика и антисептика;</li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>Приёмы в классическом массаже лица;</li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/4.jpg"
                  alt="курсы скульптурного массажа лица в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы пластический массаж лица
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/4.jpg"
                        alt="обучение скульптурный массаж лица в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Курсы пластический массаж лица
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Косметические препараты, применяемые до и вовремя
                              процедуры пластический массаж лица. Алгоритм
                              процедуры пластический массаж лица;
                            </li>
                            <li>Понятие процедуры пластический массаж лица;</li>
                            <li>
                              Показания, противопоказания к процедуре пластический
                              массаж лица;
                            </li>
                            <li>изучение техники выполнения;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>Техника выполнения;</li>
                            <li>Отработка практического навыка.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/5.jpg"
                  alt="курсы буккального массажа лица в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы Буккального массажа лица
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/5.jpg"
                        alt="обучение буккальный массаж лица в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Курсы Буккального массажа лица
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Косметические препараты, применяемые до и вовремя
                              процедуры Буккальный массаж лица. Алгоритм процедуры
                              Буккальный массаж лица;
                            </li>
                            <li>Понятие процедуры Буккальный массаж лица;</li>
                            <li>
                              Показания, противопоказания к процедуре Буккального
                              массажа лица;
                            </li>
                            <li>изучение техники выполнения;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>Техника выполнения;</li>
                            <li>Отработка практического навыка.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/6.jpg"
                  alt="курсы японского массажа лица в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы Японского массажа лица
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часа</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/6.jpg"
                        alt="обучение японский массаж лица в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Курсы Японского массажа лица
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часа</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Косметические препараты, применяемые до и вовремя
                              процедуры Японского массажа лица. Алгоритм процедуры
                              Японского массаж лица;
                            </li>
                            <li>Понятие процедуры Японский массаж лица;</li>
                            <li>
                              Показания, противопоказания к процедуре Японский
                              массаж лица;
                            </li>
                            <li>изучение техники выполнения;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>Техника выполнения;</li>
                            <li>Отработка практического навыка.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/7.jpg"
                  alt="Шиацу массаж обучение в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">Курсы массажа Шиацу</div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/2.jpg"
                        alt="обучение Шиацу массаж в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Курсы массажа Шиацу
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>история Японского массажа Шиацу;</li>
                            <li>
                              влияние массажа на локальные зоны, органы и системы
                              человека;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>показания и противопоказания;</li>
                            <li>Японский массаж Шиацу в Spa;</li>
                            <li>
                              массаж Шиацу для похудения, оздоровления,
                              расслабления, anti-age;
                            </li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>приёмы в массаже Шиацу;</li>
                            <li>мастер-класс;</li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/8.jpg"
                  alt="Курсы Антицеллюлитного массажа в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы Антицеллюлитного массажа
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/8.jpg"
                        alt="обучение Антицеллюлитный массаж в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Курсы Антицеллюлитного массажа
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              введение в анатомические и физиологические
                              особенности;
                            </li>
                            <li>
                              влияние массажа на локальные зоны, кожу и
                              подкожно-жировую клетчатку, органы и системы
                              человека;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>приёмы антицеллюлитного массажа;</li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/9.jpg"
                  alt="Курсы классического массажа в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы классический массаж
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong style={{fontWeight: 700}}>72 ак.часа</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 12000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 25000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 35000₽</strong
                >
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
                        src="/img/kurs1/9.jpg"
                        alt="обучение классический массаж в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          Обучение классическому массажу
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >72 ак.часа</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 12000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 25000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 35000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm">
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Введение в анатомию (органы и системы человека:
                              кожа, мышцы, скелет, лимфатическая и кровеносная
                              системы, нервная система, суставы и связки, органы
                              брюшной полости);
                            </li>
                            <li>влияние массажа на органы и системы человека;</li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>уход за руками;</li>
                            <li>профилактика профзаболеваний массажиста;</li>
                            <li>юридические аспекты профессии массажиста;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>
                              Приемы классического массажа» (поглаживание,
                              растирание, разминание, выжимание, вибрация);
                            </li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/10.jpg"
                  alt="курсы спа процедур обучение в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы Спа технолог
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >72 ак.часа</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 27000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 55000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 75000₽</strong
                >
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
                        src="/img/kurs1/10.jpg"
                        alt="обучение Спа процедурам в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение спа технолог
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >72 ак.часа</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 27000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 55000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 75000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>что такое SPA;</li>
                            <li>
                              влияние программ на локальные зоны, органы и системы
                              человека;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>показания и противопоказания;</li>
                            <li>формирование SPA-программы по показаниям;</li>
                            <li>обзор косметических средств для SPA;</li>
                            <li>SPA-уход в домашних условиях;</li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>мастер-класс;</li>
                            <li>
                              приёмы в Тайском, Креольском(бамбуковыми
                              палочками), Стоунтерапии(массаж камнями),
                              Шиацу;
                            </li>
                            <li>изучение техник выполнения обёртывания и скрабирования;</li>
                            <li>техники энергосбережения;</li>
                            <li>Отработка практических навыков;</li>
                            <li>Аттестация.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/11.jpg"
                  alt="Курсы Тайского массажа в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">Курсы Тайский массаж</div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >36 акад.часа</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 12000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 25000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 35000₽</strong
                >
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
                        src="/img/kurs1/11.jpg"
                        alt="обучение Тайскому массажу в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение Тайский массаж
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >36 акад.часа</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 12000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 25000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 35000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Введение в анатомические и физиологические
                              особенности;
                            </li>
                            <li>
                              влияние массажа на локальные зоны, органы и системы
                              человека;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>показания и противопоказания;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>
                              Приёмы воздействия на энергетические линии тела —
                              меридианы и биологически активные точки тела
                              человека;
                            </li>
                            <li>мастер-класс;</li>
                            <li>изучение техники выполнения;</li>
                            <li>техники энергосбережения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/12.jpg"
                  alt="Курсы Тибетского массажа в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы Тибетский массаж
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong
                  style={{fontSize: "18px", color: "rgb(51, 51, 51)", fontWeight: 700}}
                >16 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/12.jpg"
                        alt="обучение Тибетскому массажу в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение Тибетский массажа
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong
                          style={{fontSize: "18px", color: "rgb(51, 51, 51)", fontWeight: 700}}

                        >16 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Косметические средства, применяемые до и вовремя
                              процедуры Тибетского массажа. Алгоритм проведения
                              Тибетского массажа;
                            </li>
                            <li>Понятие процедуры Тибетский массаж;</li>
                            <li>
                              Показания, противопоказания к процедуре Тибетского
                              массажа;
                            </li>
                            <li>изучение техники выполнения;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>Техника выполнения;</li>
                            <li>Отработка практического навыка.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/13.jpg"
                  alt="Курсы Стоунтерапии в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">Курсы Стоунтерапия</div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/13.jpg"
                        alt="обучение массажу горячими камнями в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение массаж горячими камнями
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Понятие стоунтерапии, обзор пород камней и их
                              свойства;
                            </li>
                            <li>
                              влияние массажа на локальные зоны, органы и системы
                              человека;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>показания и противопоказания;</li>
                            <li>
                              стоунтерапия в лечебно-профилактических программах;
                            </li>
                            <li>стоунтерапия в Spa;</li>
                            <li>стоунтерапия в коррекции фигуры;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>приёмы в стоунтерапии;</li>
                            <li>мастер-класс;</li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/14.jpg"
                  alt="обучение массажу бамбуковыми палочками в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  обучение креольскому массажу
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/14.jpg"
                        alt="обучение массаж бамбуковыми палочками в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение Креольский массаж
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>история Креольского массажа;</li>
                            <li>
                              влияние массажа на локальные зоны, органы и системы
                              человека;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>показания и противопоказания;</li>
                            <li>
                              обзор средств для проведения Креольского массажа;
                            </li>
                            <li>креольский массаж в Spa;</li>
                            <li>креольский массаж в коррекции фигуры;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>приёмы в креольском массаже;</li>
                            <li>мастер-класс;</li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/15.jpg"
                  alt="Курсы массажа без медицинского образования в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы основных видов массажа
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >144 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 22000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 45000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 65000₽</strong
                >
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
                        src="/img/kurs1/15.jpg"
                        alt="обучение массажу без медицинского образования в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение основным видам массажа
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >144 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 22000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 45000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 65000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              Введение в анатомию (органы и системы человека:
                              кожа, мышцы, скелет, лимфатическая и кровеносная
                              системы, нервная система, суставы и связки, органы
                              брюшной полости);
                            </li>
                            <li>влияние массажа на органы и системы человека;</li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>уход за руками;</li>
                            <li>профилактика профзаболеваний массажиста;</li>
                            <li>юридические аспекты профессии массажиста;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>
                              Приемы в классическом(лицо и тело), лимфодренажном,
                              антицеллюлитном, спортивном;
                            </li>
                            <li>изучение техник выполнения;</li>
                            <li>техники энергосбережения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/16.jpg"
                  alt="обучение аппаратной коррекции фигуры в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  обучение массажу в коррекции фигуры
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >72 ак.часа</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 19000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 35000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 55000₽</strong
                >
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
                        src="/img/kurs1/16.jpg"
                        alt="обучение массаж коррекция фигуры в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение массажу в коррекции фигуры
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >72 ак.часа</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 19000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 35000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 55000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              введение в анатомические и физиологические
                              особенности;
                            </li>
                            <li>
                              влияние массажа на локальные зоны, кожу и
                              подкожно-жировую клетчатку, органы и системы
                              человека;
                            </li>
                            <li>показания и противопоказания;</li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>
                              обзор косметических средств для коррекции фигуры;
                            </li>
                            <li>
                              формирование программы коррекции фигуры по
                              показаниям;
                            </li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>мастер-класс;</li>
                            <li>
                              приёмы ручных техник:лимфодренажного,
                              антицеллюлитного, вакуумно-баночного, медового;
                            </li>
                            <li>
                              приёмы аппаратных
                              техник:вакуумного,вакуумно-роликового,кавитации,rf-лифтинга,миостимуляции;
                            </li>
                            <li>техники энергосбережения;</li>
                            <li>изучение техник выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/17.jpg"
                  alt="Курсы лимфодренажного массажа в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы лимфодренажного массажа
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/17.jpg"
                        alt="обучение лимфодренажному массажу в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение лимфодренажный массаж
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              введение в анатомические и физиологические
                              особенности;
                            </li>
                            <li>
                              влияние массажа на локальные зоны, кожу и
                              подкожно-жировую клетчатку, органы и системы
                              человека;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>приёмы в лимфодренажном массаже;</li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/18.jpg"
                  alt="Курсы lpg-массажа обучение в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы lpg-массаж обучение
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >16 акад.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 7000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 15000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 25000₽</strong
                >
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
                        src="/img/kurs1/18.jpg"
                        alt="обучение lpg-массажу в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          обучение lpg-массажe
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >16 акад.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 7000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 15000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 25000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>
                              введение в анатомические и физиологические
                              особенности;
                            </li>
                            <li>
                              влияние массажа на локальные зоны, кожу и
                              подкожно-жировую клетчатку, органы и системы
                              человека;
                            </li>
                            <li>показания и противопоказания;</li>
                            <li>
                              последовательность действий при проведении LPG
                              масажа;
                            </li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>требования к помещению;</li>
                            <li>
                              рекомендации по работе и общению с клиентом от
                              практикующих мастеров;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>Приемы проведения LPG массажа;</li>
                            <li>изучение техники выполнения;</li>
                            <li>Отработка практических навыков.</li>
                          </ul>
                        </div>
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
                  src="/img/kurs1/19.jpg"
                  alt="Курсы обучения спортивному массажу в Адлере"
                />
              </div>
            </div>
            <div className="product_content">
              <div className="product_desc">
                <div className="product_title product-name">
                  Курсы спортивного массажа
                </div>
                <div className="product_work">
                  Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                >36 ак.часов</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Заочно-дистанционно 9000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно в группе 18000₽</strong
                ><br/><strong  style={{fontWeight: 700}}
                >Очно-индивидуально 28000₽</strong
                >
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
                        src="/img/kurs1/19.jpg"
                        alt="обучение спортивный массаж в Адлере"
                      />
                    </div>
                    <div className="product_popup_right">
                      <div className="product_desc">
                        <div className="product_title product-name">
                          курсы обучения спортивному массажу
                        </div>
                        <div className="product_work">
                          Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                        >36 ак.часов</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Заочно-дистанционно 9000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно в группе 18000₽</strong
                        ><br/><strong  style={{fontWeight: 700}}
                        >Очно-индивидуально 28000₽</strong
                        >
                        </div>
                      </div>
                      <div className="product_buy btn" data-action="add-to-cart">
                        Заказать
                      </div>
                      <div className="product_popup_content content">
                        <div className="t849__text t-descr t-descr_sm" >
                          <strong  style={{fontWeight: 700}}
                          >Программа курса:</strong
                          ><br/><strong  style={{fontWeight: 700}}
                        >Теоретическая часть:</strong
                        ><br/>
                          <ul>
                            <li>мастер-класс;</li>
                            <li>требования к помещению;</li>
                            <li>требования к массажисту и массируемому;</li>
                            <li>введение в спортивный массаж;</li>
                            <li>методики проведения различных видов;</li>
                            <li>характеристика особенностей;</li>
                            <li>
                              обзор используемых активных средств для наружнего
                              применения;
                            </li>
                            <li>разбор вопросов с преподавателем;</li>
                            <li>проверка усвоенного материала.</li>
                          </ul>
                          <strong  style={{fontWeight: 700}}
                          >Практическая часть:</strong
                          ><br/>
                          <ul>
                            <li>Приемы в спортивном массаже;</li>
                            <li>изучение техники выполнения;</li>
                            <li>подбор необходимого воздействия;</li>
                            <li>техники энергосбережения;</li>
                            <li>
                              практики для использования в домашних условиях;
                            </li>
                            <li>Отработка практических навыков.</li>
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
                    xmlns="http://www.w3.org/2000/svg"
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
                       style={{fill: '#000'}}
                      d="M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm16.9 13.9l-6.7 31.5c-.1.6-.8.9-1.4.6l-10.3-6.9-5.5 5.2c-.5.4-1.2.2-1.4-.4L18 32.7l-9.5-3.9c-.7-.3-.7-1.5 0-1.8l37.1-14.1c.7-.2 1.4.3 1.3 1z"
                    ></path>
                    <path
                       style={{fill: '#000'}}
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
