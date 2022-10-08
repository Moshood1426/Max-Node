const products = [];
const rootdir = require("../util/path")
const path = require("path")
const fs = require("fs")

class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const savePath = path.join(rootdir, 'data', 'products')
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
}

module.exports = Product;
