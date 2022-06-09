(() => {
  type UserID = string | number | boolean;
  let userID: string | number | boolean;

  function greeting(userID: UserID) {
    if (typeof userID === "string") {
      console.log(userID.toLowerCase());
    }
  }
  greeting("Esto es string.");
  greeting(12345);

  let shitSize: 'S' | 'M' | 'L';
  shitSize = 'S';
  shitSize = 'M';
  shitSize = 'L';
  shitSize = 'XL';
})();
