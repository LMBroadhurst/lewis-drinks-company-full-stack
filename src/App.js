import DrinkList from "./components/DrinkList.js";
import AddDrink from "./components/AddDrink.js";
import Header from "./components/Header.js";
import DeleteDrink from "./components/DeleteDrink.js";
import { useState } from 'react';
import EditDrink from "./components/EditDrink.js";

function App() {

  const [drinks, setDrinks] = useState([]);

  return (
    <>
      <Header />
      <DrinkList drinks={drinks} setDrinks={setDrinks} />
      <AddDrink drinks={drinks} setDrinks={setDrinks} />
      <DeleteDrink />
      <EditDrink />
    </>
  );
}

export default App;
