import { useState } from 'react';
import axios from 'axios';
import "./AddDrink.css";

const AddDrink = ( {drinks, setDrinks} ) => {

    const [name_of_drink, set_name_of_drink] = useState('');
    const [parent_company, set_parent_company] = useState('');
    const [in_stock, set_in_stock] = useState(false);


    const handleNameChange = event => set_name_of_drink(event.target.value);
    const handleParentCompany = event => set_parent_company(event.target.value);
    const handleInStock = event => set_in_stock(event.target.value);

    const handleSubmit = async event => {
        event.preventDefault()

        const drink = {
            "name_of_drink": name_of_drink,
            "parent_company": parent_company,
            "in_stock": in_stock
        }

        axios.post('http://127.0.0.1:8080/drinks', drink)
            .then( res => {
                console.log(res);
            }).catch( (err) => console.log(err) );

        const newDrink = await drink.json();

        setDrinks(listedDrinks => [...listedDrinks, newDrink]);

        set_in_stock('');
        set_name_of_drink('');
        set_parent_company('')

    }



  return (
    <>
        <section>
            <h1>Order Request Form</h1>

            <form onSubmit={handleSubmit}>

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

export default AddDrink