export default class ProductClass {
  constructor() {
    this._id = -1;
    this._category = '';
    this._name = '';
    this._price = -1;
    this._stock = -1;
    this._description = '';
  }

  toJSON() {
    return {
      id: this.id,
      category: this.category,
      price: this.price,
      name: this.name,
      stock: this.stock,
      description: this.description,
    };
  }

  set id(id) {
    this._id = id;
  }

  set category(category) {
    this._category = category;
  }

  set name(name) {
    this._name = name;
  }
  set price(price) {
    this._price = Number(price);
  }
  set stock(stock) {
    this._stock = Number(stock);
  }
  set description(description) {
    this._description = description;
  }

  get id() {
    return this._id;
  }
  get category() {
    return this._category;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  get stock() {
    return this._stock;
  }
  get description() {
    return this._description;
  }
}
