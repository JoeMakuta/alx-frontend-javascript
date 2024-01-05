/* eslint-disable */
const pascalTriangle = (number) => {
  if (number <= 0) {
    console.log([]);
  } else {
    for(let i = 1; i < number; i++){
        let tab = []
        for(let j = 1 ; j < i; j++){
            tab.push(j)
        }
        for (let j = i; j > 0 ; j--) {
          tab.push(j);
        }
        console.log(tab)
    }
  }
};

pascalTriangle(10);
