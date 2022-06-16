package com.example.Lewis.DrinksCompanyBE.Drink;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/drinks")
@CrossOrigin(origins = "http://localhost:3000")
public class DrinkController {

    private DrinkRepository drinkRepository;

    public DrinkController(DrinkRepository drinkRepository) {
        this.drinkRepository = drinkRepository;
    }


//    Mapping Methods

    @GetMapping
    Collection<Drink> getAll() {
        return drinkRepository.getAll();
    }

    @PostMapping()
    void post(@RequestBody Drink drink) {
        drinkRepository.add(drink);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {drinkRepository.delete(id);}

    @PutMapping("/put/{id}")
    void put(@PathVariable Long id, String name_of_drink, String parent_company, boolean in_stock) {
        drinkRepository.put(id, name_of_drink, parent_company, in_stock);
    }

}
