"use client";
import React, {useEffect} from "react";
import useProductStore from "@/app/stores/useProductStore";

const Popup = ({ isOpen, closePopup, product }) => {
  const addToCart = useProductStore((state) => state.addToCart);


  if (!isOpen || !product) return null;


  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div className="popup popup_product" style={{display: "block"}}>
      <div className="close1" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} onClick={closePopup}></div>
      <div className="popup-block">
        <div className="close2" onClick={closePopup}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path
              d="M12.5956 10.6452C13.1348 11.1847 13.1348 12.0564 12.5956 12.5958C12.4676 12.7241 12.3156 12.8258 12.1482 12.8952C11.9808 12.9645 11.8013 13.0001 11.6201 12.9999C11.2671 12.9999 10.914 12.8648 10.645 12.5958L6.50003 8.45055L2.35511 12.5959C2.22718 12.7241 2.07517 12.8259 1.9078 12.8952C1.74044 12.9646 1.56103 13.0002 1.37987 13C1.19869 13.0002 1.01926 12.9646 0.851875 12.8952C0.684492 12.8259 0.532458 12.7242 0.404503 12.5959C-0.134747 12.0564 -0.134747 11.1847 0.404503 10.6452L4.54968 6.50016L0.404438 2.35516C-0.134813 1.81564 -0.134813 0.943965 0.404438 0.404511C0.943946 -0.13475 1.8156 -0.13475 2.35511 0.404511L6.50003 4.54977L10.645 0.404446C11.1845 -0.134815 12.0561 -0.134815 12.5956 0.404446C13.1348 0.943965 13.1348 1.81564 12.5956 2.35516L8.45039 6.50016L12.5956 10.6452Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="product_popup">
          <div className="product_popup_items">
            <div className="product_popup_img">
              <img className="product-img" src={product.image} alt={product.alt} />
            </div>
            <div className="product_popup_right">
              <div className="product_desc">
                <div className="product_title product-name">{product.title}</div>
                <div className="product_work">Длительность - {product.duration}</div>
                <div className="product_price product-price">
                  {product.price} <span>{product.currency}</span>
                </div>
              </div>
              <div className="product_buy btn" onClick={handleAddToCart}>
                Заказать
              </div>
              <div className='product_popup_content content'>
                <p>{product.description}</p>
                <p>Включает:</p>
                <div className="product_popup_content content">
                  <ul>
                    {product.includes.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
