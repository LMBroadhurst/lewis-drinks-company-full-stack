import { useState, useEffect, useReducer } from "react";
import axios from 'axios';
import "./DrinkList.css";

const DrinkList = () => {

    const [drinks, setDrinks] = useState([]);

    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect( () => {
        axios.get("http://127.0.0.1:8080/drinks")
            .then(result => {
                const drinksFromBE = result.data;
                setDrinks(drinksFromBE);
            }).catch( (err) => console.log(err) );
    }, [reducerValue]);

  return (
    <>
        <ul className="drink-list">
            {
                drinks.map( drink => 
                    <li className="drink-list-li" key={drink.id}>{`${drink.name_of_drink}  |  Supplied by ${drink.parent_company}  |  In stock? ${drink.in_stock}`}</li>)
            }
        </ul>
    </>
  )
}

export default DrinkList