import "./CartListItem.css";

function CartListItem({id, name, price, count, cartList, setCartList}) {

  function handleDeleteCartItem() {
    const updatedCartList = cartList.filter(item => item.id !== id);
    setCartList(updatedCartList);
  }

  return (
    <li className="cart-item">
      <div className="datails">
        <h4 className="txt-4-sbold">{name}</h4>
        <p>
          <span className="txt-4-sbold txt-red">{count}x</span>
          <span className="txt-4 txt-rose">@ ${price.toFixed(2)}</span>
          <span className="txt-4-sbold txt-rose">${(price*count).toFixed(2)}</span>
        </p>
      </div>
      <div className="icon" onClick={handleDeleteCartItem}>
        <DeleteIcon />
      </div>
    </li>
  );
}

export default CartListItem;

const DeleteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
  </svg>
);
