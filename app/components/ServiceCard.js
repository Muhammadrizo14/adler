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
      <div className="product card duration-1 women massage">
        <div className="product_img">
          <div className="screen_img">
            <img
              className="product-img"
              src={service.image}
              alt={service.alt}
            />
          </div>
        </div>
        <div className="product_content">
          <div className="product_desc">
            <div className="product_title product-name">{service.title}</div>
            <div className="product_work">Длительность - {service.duration}</div>
            <div className="product_price product-price">
              {service.price} <span>{service.currency}</span>
            </div>
          </div>
          <div className="product_buy btn" onClick={() => addToCart(service)}>
            {cart.some(item => item.id === service.id) ? "В корзине" : "Заказать"}
          </div>
          <div className="product_more" onClick={() => openPopup(service)}>Подробнее</div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} product={service}/>
    </>
  )
}