import "./Card.css";
import { AddToCartBtn, Counter } from "../";
import { DessertContext } from "../../Contexts/DessertContext";
import { useContext } from "react";

function Card({ id, name, category, price, image }) {
  const { cartList, setCartList } = useContext(DessertContext);
  const count = cartList.find((item) => item.id === id)?.count || 0;

  return (
    <div className="card">
      <div className={`card-img ${count > 0 ? "active" : ""}`}>
        <img src={image} alt="gateu" />
        {count <= 0 ? (
          <AddToCartBtn
            id={id}
            name={name}
            price={price}
            image={image}
            cartList={cartList}
            setCartList={setCartList}
          />
        ) : (
          <Counter id={id} cartList={cartList} setCartList={setCartList} />
        )}
      </div>
      <div className="card-body">
        <span className="txt-4 txt-rose">{category}</span>
        <h4 className="txt-3">{name}</h4>
        <span className="txt-3 txt-red">${price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Card;
