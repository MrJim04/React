import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let fruits = ["Apple", "Orange", "Pineapple", "Water Melon", "Strawberry"];
  let vegetables = ["Carrot", "Broccoli", "Spinach", "Tomato", "Zucchini"];
  let drinks = ["Water", "Coffee", "Tea", "Juice", "Soda"];

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert children="All Done!" onClose={() => setAlertVisibility(false)}/>}
      <ListGroup items={fruits} heading="Fruits" />
      <ListGroup items={vegetables} heading="Vegetables" />
      <ListGroup items={drinks} heading="Drinks" />
      <Button onClick={() => setAlertVisibility(true)} text="Done" />
    </div>
  );
}

export default App;
