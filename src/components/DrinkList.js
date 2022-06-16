import { useState, useEffect } from "react";
import axios from 'axios';

const DrinkList = () => {

    const [drinks, setDrinks] = useState([]);

    useEffect( () => {
        axios.get("http://127.0.0.1:8080/drinks")
            .then(result => {
                const drinksFromBE = result.data;
                setDrinks(drinksFromBE);
            }).catch( (err) => console.log(err) );
    }, []);

  return (
    <>
        <ul>
            {
                drinks.map( drink => 
                    <li key={drink.id}>{`${drink.name_of_drink}  |  Supplied by ${drink.parent_company}  |  In stock? ${drink.in_stock}`}</li>)
            }
        </ul>
    </>
  )
}

export default DrinkList