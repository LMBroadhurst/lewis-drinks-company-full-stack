import axios from "axios";
import { useState } from "react";

const DeleteDrink = () => {

    const [drinkId, setDrinkId] = useState(-1);

    const handleIdChange = event => setDrinkId(event.target.value);

    const handleDelete = event => {
        event.preventDefault();

        axios.delete(`http://127.0.0.1:8080/drinks/${drinkId}`)
            .then( res => {
                console.log(res);
            }).catch( (err) => console.log(err) );

        setDrinkId('');
    }

  return (
    <>
        <section>
            <h1>Delete Drink</h1>

            <form onSubmit={handleDelete}>

                <label>
                    Drink ID
                    <input type="text" 
                           name="name_of_drink"
                           onChange={handleIdChange}  />
                </label>

                <button type="submit">Submit</button> 

            </form>
        </section>
        
    </>
  )
}

export default DeleteDrink