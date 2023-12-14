const products = require("./products.js");
function productsbyname(name){
    return products.filter((product) => product.name === name);
}

