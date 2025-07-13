import "./Counter.css";
import { useContext } from "react";
import { DessertContext } from "../../Contexts/DessertContext";

function Counter({id , cartList, setCartList}) {

  const count = cartList.find(item => item.id === id)?.count || 0;

  function handleIncrement() {
    const updatedCartList = cartList.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    })
    setCartList(updatedCartList);
  }

  function handleDecrement() {
    if(count <= 1) {
      handleRemove();
      return;
    }
    const updatedCartList = cartList.map(item => {
      if (item.id === id) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    })
    setCartList(updatedCartList);
  }
  
  function handleRemove() {
    const updatedCartList = cartList.filter(item => item.id !== id);
    setCartList(updatedCartList);
  }

  return (
    <button className="counter">
      <div className="icon" onClick={handleIncrement}>
        <IncrementIcon />
      </div>
      <span className="txt-4-sbold">{count}</span>
      <div className="icon" onClick={handleDecrement}>
        <DecrementIcon />
      </div>
    </button>
  );
}

export default Counter;

const IncrementIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path
      d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
    />
  </svg>
);

const DecrementIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={2}
    fill="none"
    {...props}
  >
    <path d="M0 .375h10v1.25H0V.375Z" />
  </svg>
);
