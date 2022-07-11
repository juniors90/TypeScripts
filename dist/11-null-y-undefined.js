"use strict";
(() => {
    //let myNumber: number = undefined;
    //let myString: string = null;
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null;
    myNumber = 12;
    let myString = undefined;
    myString = "Este es mi string!";
    function hi(name) {
        let hello = "Hola ";
        hello += (name === null || name === void 0 ? void 0 : name.toLocaleLowerCase()) || "Nobody";
        console.log(hello);
    }
    hi("Nicolas");
    hi(null);
})();
