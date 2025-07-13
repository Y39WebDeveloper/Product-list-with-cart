import "./CardList.css";
import { Card } from "../";
import data from "../../data";

function CardList() {
  const cards = data.map((item, i) => {
    return (
      <Card
        key={i}
        id={i}
        name={item.name}
        category={item.category}
        price={item.price}
        image={item.image} // Assuming you want to use the desktop image
      />
    );
  });
  return <div className="cards">{cards}</div>;
}

export default CardList;
