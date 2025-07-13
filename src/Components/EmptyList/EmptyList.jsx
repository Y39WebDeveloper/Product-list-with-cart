import "./EmptyList.css";
import ImgSrc from "../../assets/images/illustration-empty-cart.svg";

function EmptyList() {
  return (
    <div className="empty-list">
      <img src={ImgSrc} alt="" />
      <p className="txt-4-sbold txt-rose" style={{ textAlign: "center" }}>
        Your added items will appear here
      </p>
    </div>
  );
}

export default EmptyList;
