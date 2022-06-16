package com.example.Lewis.DrinksCompanyBE.Drink;

public class Drink {

    private Long id;
    private String name_of_drink;
    private String parent_company;
    private boolean in_stock;

    public Drink() {}

    public Drink(Long id, String name_of_drink, String parent_company, boolean in_stock) {
        this.id = id;
        this.name_of_drink = name_of_drink;
        this.parent_company = parent_company;
        this.in_stock = in_stock;
    }

//    Functionality



//    Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName_of_drink() {
        return name_of_drink;
    }

    public void setName_of_drink(String name_of_drink) {
        this.name_of_drink = name_of_drink;
    }

    public String getParent_company() {
        return parent_company;
    }

    public void setParent_company(String parent_company) {
        this.parent_company = parent_company;
    }

    public boolean isIn_stock(boolean in_stock) {
        return this.in_stock;
    }

    public void setIn_stock(boolean in_stock) {
        this.in_stock = in_stock;
    }
}
