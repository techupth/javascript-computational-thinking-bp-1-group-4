const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let expensivePrice=0
  let expensiveProduct
  for (let key in products){
    if(products[key].price>expensivePrice){
      expensiveProduct=key;
      expensivePrice=products[key].price;
    }else{

    }
  }
  console.log(products[expensiveProduct]);
}

getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }
