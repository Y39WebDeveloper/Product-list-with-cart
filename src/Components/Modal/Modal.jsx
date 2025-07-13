import "./Modal.css";
import {Btn, ModalItem} from "../";
import { DessertContext } from "../../Contexts/DessertContext";
import { useContext } from "react";
import ImgSrc from "../../assets/images/icon-order-confirmed.svg"; // Ensure this path is correct

function Modal({setShowModal}) {
  const {cartList, setCartList} = useContext(DessertContext);
  const totalPrice = cartList.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0).toFixed(2);

  function closeModal() {
    setShowModal(false);
    document.body.style.overflow = "auto";
    setCartList([])
  }

    const modalItems = cartList.map((item) => (
    <ModalItem
      key={item.id}
      name={item.name}
      price={item.price}
      count={item.count}
      image={item.image}
    />
  ));

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-head">
          <img src={ImgSrc} alt="" />
          <div className="title">
            <h1 className="txt-1">Order Confirmed</h1>
            <p className="txt-rose">We hope you enjoy your food!</p>
          </div>
        </div>
        <div className="modal-list">
          <ul>
            {modalItems}
          </ul>
          <div className="total">
            <h5 className="txt-4">Order Total</h5>
            <span className="txt-2">${totalPrice}</span>
          </div>
        </div>
        <Btn setShowModal={closeModal}>Start New Order</Btn>
      </div>
    </div>
  );
}

export default Modal;
