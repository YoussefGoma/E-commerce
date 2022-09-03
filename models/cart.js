const Sequelize = require("sequelize");
const sequelize = require ("../util/database")

const Cart = sequelize.define("cart",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey: true
  }
  })

module.exports = Cart;
















// const fs = require("fs")
// const path = require("path")

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'cart.json'
// );

// module.exports = class Cart {
//     static addProduct(id, productPrice) {
//         // get cart content
//         let cart;
//         fs.readFile(p, (err, fileContent) => {
//             cart = { products: [], totalPrice: 0 };
//             if (!err) {
//                 cart = JSON.parse(fileContent);
//             }
//             // check for existing products
//             const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
//             const existingProduct = cart.products[existingProductIndex];
//             let updatedProduct;
//             if (existingProduct) {
//                 updatedProduct = { ...existingProduct };
//                 updatedProduct.qty += 1
//                 cart.products = [...cart.products];
//                 cart.products[existingProductIndex] = updatedProduct;
//                 console.log(1);
//             } else {
//                 updatedProduct = { id: id, qty: 1 };
//                 cart.products = [...cart.products, updatedProduct];
//                 console.log(2);
//             }
//             cart.totalPrice += +productPrice;
//             fs.writeFile(p, JSON.stringify(cart), err => { console.log(err); })

//         })
//     }
//     static deleteProduct(id, productPrice) {

//         fs.readFile(p, (err, fileContent) => {
//             if (err) { return; }
//             const updatedCart = { ...JSON.parse(fileContent) };
//             const product = updatedCart.products.find(product => product.id === id);
//             if (!product) {
//                 return;
//             }
//             updatedCart.products = updatedCart.products.filter(product => product.id !== id);
//             updatedCart.totalPrice -= productPrice * product.qty;
//             fs.writeFile(p, JSON.stringify(updatedCart), err => { console.log(err); });
//         });
//     }
//     static getCartProducts(cb) {
//         fs.readFile(p, (err, fileContent) => {
//             const cart = JSON.parse(fileContent)
//             if (err) {
//                 cb(null);
//             } else {
//                 cb(cart);
//             }
//         })

//     }
// };
