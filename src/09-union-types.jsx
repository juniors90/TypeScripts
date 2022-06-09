(() => {
  let userID: string | Number;
  userID = 123;
  userID = "123";

  function greeting(myText: number | string) {
    if (typeof myText === "string") {
      console.log(myText.toLowerCase());
    } else {
      console.log(myText * 3);
    }
  }
  greeting("Esto es string.");
  greeting(12345);
})();
