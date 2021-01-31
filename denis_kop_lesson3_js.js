// Task1
let i = 0, arr = [];
while (i < 100) {
    if (isNumber(i)) {
        arr.push(i);
    }
    i++;}
function isNumber(newnum) {
    if (newnum < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(newnum); i++) {
        if (newnum % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(arr)
// Task_2
    const basket = [
        {vendor_code: 10011,
            product_name: "Телевизор",
            quantity: 1,
            unit_price: 30000
        },
        {vendor_code: 10022,
            product_name: "Планшет",
            quantity: 2,
            unit_price: 23000
        },

        {vendor_code: 10145,
            product_name: "Телефон",
            quantity: 3,
            unit_price: 15000
        },
    ]

    function countBasketPrice(basket) {
      let tot_sum = 0;
      for (let i = 0; i < basket.length; i++) {
        tot_sum += basket[i].unit_price * basket[i].quantity;
      }
      return tot_sum;
    }

console.log(countBasketPrice(basket));