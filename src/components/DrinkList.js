import { useEffect } from "react";
import axios from 'axios';
import "./DrinkList.css";

const DrinkList = ( {drinks, setDrinks} ) => {

    useEffect( () => {
        axios.get("http://127.0.0.1:8080/drinks")
            .then(result => {
                const drinksFromBE = result.data;
                setDrinks(drinksFromBE);
            }).catch( (err) => console.log(err) );
    });

  return (
    <>
        <ul className="drink-list">
            {
                drinks.map( drink => 
                    <li className="drink-list-li" key={drink.id}>{`${drink.name_of_drink}  |  Supplied by ${drink.parent_company}  |  In stock? ${drink.in_stock}  |  id: ${drink.id}`}</li>)
            }
        </ul>
    </>
  )
}

export default DrinkList