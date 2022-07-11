"use strict";
(() => {
    let userID;
    function greeting(userID) {
        if (typeof userID === "string") {
            console.log(userID.toLowerCase());
        }
    }
    greeting("Esto es string.");
    greeting(12345);
    let shitSize;
    shitSize = 'S';
    shitSize = 'M';
    shitSize = 'L';
    shitSize = 'XL';
})();
