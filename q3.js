// ===== Session 08 - Exercise 3: Object Methods =====

const shoppingCart = {
  items: [],

  addItem: function (name, price, qty = 1) {
    this.items.push({ name, price, qty });
    console.log(`Added: ${name}`);
  },

  removeItem: function (name) {
    this.items = this.items.filter((item) => item.name !== name);
    console.log(`Removed: ${name}`);
  },

  getTotal: function () {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  displayCart: function () {
    console.log("\n===== Cart =====");
    this.items.forEach((item) => {
      console.log(`${item.name} x${item.qty} = ${item.price * item.qty} EGP`);
    });
    console.log("----------------");
    console.log(`Total: ${this.getTotal()} EGP`);
  },
};

// Test
shoppingCart.addItem("Laptop", 15000, 1);
shoppingCart.addItem("Mouse", 500, 2);
shoppingCart.addItem("Keyboard", 800, 1);
shoppingCart.displayCart();

shoppingCart.removeItem("Mouse");
shoppingCart.displayCart();
