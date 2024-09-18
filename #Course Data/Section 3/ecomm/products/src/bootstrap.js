import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    // console.log(name);
    products += `<div>${name}</div>`;
  }

  // console.log(products);
  el.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming our container does not have an element with id of 'dev-products'
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// We do not want try to immediately render the app

export { mount }; // by exporting mount function, we can use it in container app
