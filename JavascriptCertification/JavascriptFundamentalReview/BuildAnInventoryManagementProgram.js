let inventory = [];

const findProductIndex = (productName) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == productName.toLowerCase()) {
      return i;
    }
  }
  return -1;
};

const addProduct = (product) => {
  const productIndex = findProductIndex(product.name);
  if (productIndex >= 0) {
    inventory[productIndex].quantity += product.quantity;
    console.log(`${inventory[productIndex].name} quantity updated`);
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: Number(product.quantity),
    });
    console.log(`${product.name.toLowerCase()} added to inventory`);
  }
};

const removeProduct = (name, quantity) => {
  const productIndex = findProductIndex(name);
  if (productIndex >= 0) {
    if (inventory[productIndex].quantity - quantity > 0) {
      inventory[productIndex].quantity -= quantity;
      console.log(
        `Remaining ${name.toLowerCase()} pieces: ${
          inventory[productIndex].quantity
        }`
      );
    } else if (inventory[productIndex].quantity - quantity == 0) {
      inventory.splice(productIndex, 1);
    } else {
      console.log(
        `Not enough ${name.toLowerCase()} available, remaining pieces: ${
          inventory[productIndex].quantity
        }`
      );
    }
  } else {
    console.log(`${name.toLowerCase()} not found`);
  }
};
