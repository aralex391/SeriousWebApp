

export default class ProductClass {
    constructor() {
        this._id = -1;
        this._name = '';
        this._price = -1;
        this._stock = -1;
        this._description = '';
    }

    set id(id) {
        this._id = id;
    }
    set name(name) {
        this._name = name;
    }
    set price(price) {
        this._price = price;
    }
    set stock(stock) {
        this._stock = stock;
    }
    set description(description) {
        this._description = description;
    }

    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get price() {
        return this._price
    }
    get stock() {
        return this._stock
    }
    get description() {
        return this._description
    }
}