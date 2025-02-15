"use client";

import CoursesCard from '@/app/components/CoursesCard'
import {useState} from "react";
import useProductStore from "@/app/stores/useProductStore";

export default function Page() {
  const [cartPopup, setCartPopup] = useState(false)
  const [orderSent, setOrderSent] = useState(false)
  const {courseOfMassage, cart, removeFromCart} = useProductStore();
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
          {courseOfMassage.map(lesson=> (
            <CoursesCard key={lesson.id} service={lesson} />
          ))}
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


      <div className={`popup popup_card ${cartPopup ? 'active' : ''}`}>
        <div className="close1" onClick={()=> setCartPopup(false)}></div>
        <div className="popup-block" >
          <div className="close2"  onClick={()=> setCartPopup(false)}>
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
                          setCartPopup(false)
                      }}>
                        <input className="btn" type="submit" value="Заказать"/>
                      </div>
                    </div>
                  </>
                ) : ''}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={`to_cart`} onClick={()=> setCartPopup(true)}>
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
      {orderSent && (
        <div className="popup popup_last">
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
      )}


    </div>
  );
}
