package com.example.Lewis.DrinksCompanyBE.Drink;

import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;


@Repository
public class DrinkRepository {

    private Map<Long, Drink> map = new HashMap<>();

    {
        map.put(1L, new Drink(1L, "Pepsi Max", "coca-cola", true));
        map.put(2L, new Drink(2L, "Arabica Coffee", "Starbucks", true));
        map.put(3L, new Drink(3L, "Sprite (Lemon & Lime)", "coca-cola", false));
        map.put(4L, new Drink(4L, "Ice Tea (Lemon)", "Liptons", true));
    }

    public Collection<Drink> getAll() {
        return map.values();
    }

    public void add(Drink drink) {
        Long nextId = (long) (map.size() + 1);
        drink.setId(nextId);
        map.put(nextId, drink);
    }

    public void delete(Long id) {
        if(!map.containsKey(id)) {
            throw new NoSuchElementException("No drink with ID: " + id);
        }

        map.remove(id);
    }

    public void put(Long id, String name_of_drink, String parent_company, boolean in_stock) {
        Drink drinkToChange = map.get(id);
        drinkToChange.setName_of_drink(name_of_drink);
        drinkToChange.setParent_company(parent_company);
        drinkToChange.isIn_stock(in_stock);
    }

}
