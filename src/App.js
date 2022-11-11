import "./App.css";
import { useState, useCallback } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

const Items = ({ todos }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [todos, setItems] = useState([]);
  const [price, setPrice] = useState(0)
  const addItem = useCallback((name) => {
    setItems((t) => [...t, name]);
  });

  function MyButton(props) {
    return (
      <button onClick={() => onClickHandler(props.name, props.amount)}>
        Add one to cart
      </button>
    );
  }

  function onClickHandler(name, amount) {
    addItem(name)
    setPrice(price + amount)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}


      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <div className="BakeryItem">
          <div className="image-box">
            <img src={item.image} alt={item.description} height={200} />
          </div>
          <div className="title">{item.name}</div>
          <h3 className="subtitle">{item.description}</h3>
          <div className="prices">{item.price}</div>
          <MyButton name={item.name} amount={item.price} />
        </div>
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <div><Items todos={todos} /></div>
        <p>Total Price: ${price}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default App;
