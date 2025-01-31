import Popup from "@/app/components/ServicePopup";
import {useState} from "react";
import useProductStore from "@/app/stores/useProductStore";

export default function Page({service}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const addToCart = useProductStore((state) => state.addToCart);
  const {cart} = useProductStore();

  const openPopup = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };
  return (
    <>
      <div className="product card">
        <div className="product_img">
          <div className="screen_img">
            <img
              className="product-img"
              src={service.image}
              alt="курсы детского массажа в Адлере"
            />
          </div>
        </div>
        <div className="product_content">
          <div className="product_desc">
            <div className="product_title product-name">
              {service.title}
            </div>
            <div className="product_work">
              Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
            >{service.duration}</strong
            ><br/><strong  style={{fontWeight: 700}}
            >Заочно-дистационно {service.price.distance_learning}{service.currency}</strong
            ><br/><strong  style={{fontWeight: 700}}
            >Очно в группе  {service.price.group}{service.currency}</strong
            ><br/><strong  style={{fontWeight: 700}}
            >Очно-индивидуально  {service.price.individual}{service.currency}</strong
            >
            </div>
          </div>
          <div className="product_buy btn" onClick={() => addToCart(service)}>
            {cart.some(item => item.id === service.id) ? "В корзине" : "Заказать"}

          </div>
          <div className="product_more" onClick={()=> setIsPopupOpen(true)}>Подробнее</div>
        </div>
        {isPopupOpen && (
          <div className="popup popup_product" style={{display: 'block'}}>
            <div className="close1" onClick={()=> setIsPopupOpen(false)}></div>
            <div className="popup-block">
              <div className="close2" onClick={()=> setIsPopupOpen(false)}>
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
                      src={service.image}
                      alt="обучение детскому массажу в Адлере"
                    />
                  </div>
                  <div className="product_popup_right">
                    <div className="product_desc">
                      <div className="product_title product-name">
                        {service.title}
                      </div>
                      <div className="product_work">
                        Продолжительность:&nbsp;<strong  style={{fontWeight: 700}}
                      >{service.duration}</strong
                      ><br/><strong  style={{fontWeight: 700}}
                      >Заочно-дистационно {service.price.distance_learning}{service.currency}</strong
                      ><br/><strong  style={{fontWeight: 700}}
                      >Очно в группе {service.price.group}{service.currency}</strong
                      ><br/><strong  style={{fontWeight: 700}}
                      >Очно-индивидуально {service.price.individual}{service.currency}</strong
                      >
                      </div>
                    </div>
                    <div className="product_buy btn" onClick={() => addToCart(service)}>
                      {cart.some(item => item.id === service.id) ? "В корзине" : "Заказать"}
                    </div>
                    <div className="product_popup_content content">
                      <div className="t849__text t-descr t-descr_sm" >
                        <strong  style={{fontWeight: 700}}
                        >Программа курса:</strong
                        ><br/><strong  style={{fontWeight: 700}}
                      >Теоретическая часть:</strong
                      ><br/>
                        <ul>
                          {service.theoretical_part.map(item=> (
                            <li>{item};</li>
                          ))}
                        </ul>
                        <strong  style={{fontWeight: 700}}
                        >Практическая часть:</strong
                        ><br/>
                        <ul>
                          {service.practical_part.map(item=> (
                            <li>{item};</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}