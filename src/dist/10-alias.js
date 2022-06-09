(function () {
    var userID;
    function greeting(userID) {
        if (typeof userID === "string") {
            console.log(userID.toLowerCase());
        }
    }
    greeting("Esto es string.");
    greeting(12345);
    var shitSize;
    shitSize = 'S';
    shitSize = 'M';
    shitSize = 'L';
    shitSize = 'XL';
})();
