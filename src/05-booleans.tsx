(()=>{
  let isEnable = true;
  isEnable = 2;
  isEnable = '2';
  isEnable = '';

  let isNew: boolean = false;
  console.log('isNew', isNew);

  isNew =! isNew;
  console.log('isNew', isNew);

  let random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);
})();
