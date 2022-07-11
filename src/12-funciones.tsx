(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  function createProductJSON(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }
  let p1 = createProductJSON("P1", new Date(), 12, "S");
  console.log(p1.title);
  console.log(p1.createdAt);
  console.log(p1.size);
  console.log(p1.stock);
  
  let p2 = createProductJSON("P2", new Date(), 56, "XL");
  console.log(p2);

  const createProductJSON2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => ({ title, createdAt, stock, size });
  let p3 = createProductJSON2("P3", new Date(), 56);
  console.log(p3)
})();
