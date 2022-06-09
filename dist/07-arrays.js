"use strict";
(() => {
    let prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    prices.push("My amazing Product");
    prices.push(false);
    prices.push([2]);
    console.log("prices", prices);
    let otherPrices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    otherPrices.map(items => items * 2);
})();
