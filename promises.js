let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquids: ["water", "ice"],
    holders: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  
  let isShopOpen = true;
  
  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (isShopOpen) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject(console.log(`Our shop is closed`));
      }
    });
  };
  
  order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
    .then(() => {
      return order(0000, () => console.log(`Production has started`));
    })
  
    .then(() => {
      return order(2000, () => console.log(`The fruit has been chopped`));
    })
  
    .then(() => {
      return order(1000, () =>
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`)
      );
    })
  
    .then(() => {
      return order(1000, () => console.log(`Start the machine`));
    })
  
    .then(() => {
      return order(2000, () =>
        console.log(
          `${stocks.holders[0]} is going to be the holder for the ice cream`
        )
      );
    })
  
    .then(() => {
      return order(300, () =>
        console.log(`${stocks.toppings[1]} was selected as the topping`)
      );
    })
  
    .then(() => {
      return order(2000, () => console.log(`Ice cream has been served`));
    })
  
    .catch(() => {
      console.log(`Customer left`);
    })
  
    .finally(() => {
      console.log(`Day ended, shop is closed`);
    });