"use strict";
(() => {
    let productPrice = 2;
    productPrice = 23;
    console.log('productPrice', productPrice);
    let customerAge = 23;
    customerAge = customerAge + 1;
    // customerAge = customerAge + '1'; // 281
    console.log('customerAge', customerAge);
    let productInStock;
    console.log('productInstock', productInStock);
    if (productInStock > 0) {
        console.log('productInstock', productInStock);
    }
    ;
    let discount = parseInt('201');
    console.log('discount', discount);
    if (discount < 2000) {
        console.log('Apply');
    }
    else {
        console.log('No Apply');
    }
    ;
    let hexadecimal = 0xfdf;
    console.log('hex', hexadecimal);
    let binario = 0b100101;
    console.log('bin', binario);
})();
