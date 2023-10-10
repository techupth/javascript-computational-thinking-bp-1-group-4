const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let max = -Infinity
  for(let i = 0; i < products.length; i++) {
    if(products[i].price > max) {
      max = products[i]
    }
    
  }
  return max
}

console.log(getMostExpensiveProduct(products)); // Output: { name: "Laptop", price: 1000 }
