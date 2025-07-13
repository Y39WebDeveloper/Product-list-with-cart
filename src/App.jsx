import { useState } from "react";
import "./App.css";
import { CardList, CartList, EmptyList, Modal } from "./Components";
import { DessertContext } from "./Contexts/DessertContext";

function App() {
  const [cartList, setCartList] = useState([]);

  let cartLength = 0;
  for (let i = 0; i < cartList.length; i++) {
    cartLength += cartList[i].count;
  }
  return (
    <DessertContext.Provider value={{ cartList, setCartList }}>
      <div className="app">
        {/* <Modal /> */}
        <div className="container">
          <div className="desserts">
            <h1 className="txt-1" style={{ marginBottom: "32px" }}>
              Desserts
            </h1>
            <CardList />
          </div>

          <div className="cart">
            <h2 className="txt-2 txt-red">Your Cart ({cartLength})</h2>
            {cartList.length == 0 ? <EmptyList /> : <CartList />}
          </div>
        </div>
      </div>
    </DessertContext.Provider>
  );
}

export default App;
