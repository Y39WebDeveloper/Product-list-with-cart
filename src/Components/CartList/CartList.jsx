import { useContext, useState } from "react";
import { Btn, CartListItem, Modal } from "../";
import { DessertContext } from "../../Contexts/DessertContext";
import "./CartList.css";
import ImgSrc from "../../assets/images/icon-carbon-neutral.svg"; // Ensure this path is correct

function CartList() {
  const { cartList, setCartList } = useContext(DessertContext);
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  }

  const cartItems = cartList.map((item) => (
    <CartListItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      count={item.count}
      cartList={cartList}
      setCartList={setCartList}
    />
  ));

  const totalPrice = cartList.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0).toFixed(2);

  return (
    <>
      <ul className="cart-list">
        {cartItems}
      </ul>
      <div className="total">
        <h5 className="txt-4">Order Total</h5>
        <span className="txt-2">${totalPrice}</span>
      </div>
      <div className="tag">
        <img src={ImgSrc} alt="" />
        <p className="txt-4" style={{ textAlign: "center" }}>
          This is a carbon-neutral delivery
        </p>
      </div>
      <Btn setShowModal={openModal} showModal={true}>Confirm Order</Btn>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </>
  );
}

export default CartList;
