(() => {
  //let myNumber: number = undefined;
  //let myString: string = null;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = "Este es mi string!";
  
  function hi(name: string | null) {
    let hello: string = "Hola ";
    hello += name?.toLocaleLowerCase() || "Nobody";
    console.log(hello);
  }
  hi("Nicolas");
  hi(null);
})();
