import axios from "axios";
import { useState } from "react";
import "./EditDrink.css";

const EditDrink = (drinks, setDrinks) => {

    const [name_of_drink, set_name_of_drink] = useState('');
    const [parent_company, set_parent_company] = useState('');
    const [in_stock, set_in_stock] = useState(false);
    const [drinkId, setDrinkId] = useState(-1);

    const handleIdChange = event => setDrinkId(event.target.value);
    const handleNameChange = event => set_name_of_drink(event.target.value);
    const handleParentCompany = event => set_parent_company(event.target.value);
    const handleInStock = event => set_in_stock(event.target.value);

    const handlePut = event => {
        event.preventDefault();

        const drink = {
            "name_of_drink": name_of_drink,
            "parent_company": parent_company,
            "in_stock": in_stock
        }

        axios.put(`http://127.0.0.1:8080/drinks/put/${drinkId}`, drink)
            .then( res => {
                console.log(res);
            }).catch( (err) => console.log(err) );

    }

  return (
    <>
        <section className="editDrinks">
            <h1>Edit Drink Details</h1>

            <form onSubmit={handlePut}>

                <label>
                    Drink ID
                    <input type="text" 
                           name="name_of_drink"
                           onChange={handleIdChange}
                    />
                </label>

                <label>
                    Name of drink
                    <input type="text" name="name_of_drink" onChange={handleNameChange} />
                </label>

                <label>
                    Parent Company
                    <input type="text" name="name_parent_company" onChange={handleParentCompany} />
                </label>

                <label>
                    In stock?
                    <input type="text" name="in_stock" onChange={handleInStock} />
                </label>
                <button type="submit">Submit</button>

            </form>
        </section>
    </>
  )
}

export default EditDrink