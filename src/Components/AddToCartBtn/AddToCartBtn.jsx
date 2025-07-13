import "./AddToCartBtn.css";
import ImgSrc from "../../assets/images/icon-add-to-cart.svg";

function AddToCartBtn({ id, name, price, image, cartList, setCartList }) {
  function handleClick() {
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === id) {
        setCartList(...cartList);
        return;
      }
    }
    const newCart = {
      id: id,
      name: name,
      price: price,
      count: 1,
      image: image,
    };
    setCartList([...cartList, newCart]);
  }

  return (
    <button className="add-to-cart-btn" onClick={handleClick}>
      <img src={ImgSrc} alt="" />
      <span className="txt-4-sbold">Add to Cart</span>
    </button>
  );
}

export default AddToCartBtn;
