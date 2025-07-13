import "./ModalItem.css";

function ModalItem({name, price, count, image}) {
  return (
    <li className="modal-item">
      <div className="item">
        <img src={image} alt="" />
        <div className="details">
          <h4 className="txt-4-sbold">{name}</h4>
          <p>
            <span className="txt-4-sbold txt-red">{count}x</span>
            <span className="txt-4 txt-rose">@ ${price.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <span className="txt-3">${(price*count).toFixed(2)}</span>
    </li>
  );
}

export default ModalItem;
