import faker from "faker";

let products = "";

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName();
  // console.log(name);
  products += `<div>${name}</div>`;
}

// console.log(products);
document.querySelector("#dev-products").innerHTML = products;
