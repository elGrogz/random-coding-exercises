// flattenDepth(array, 1);
// // => [1, 2, [3, [4]], 5]

// flattenDepth(array, 2);
// // => [1, 2, 3, [4], 5]

// const flattenDepth = (array, depth) => {
//   return array.flat(depth);
// };

// [1, [2, [3, [4]]], [5]]

const flattenDepth = (array) => {
  let arrayToReturn = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (!element.length) {
      console.log(element.length);
      arrayToReturn.push(element);
    }

    if (element.length) {
      console.log(element);
      arrayToReturn.push(element[0]);

      let newArrayToReturn = [];

      for (let index = 1; index < element.length; index++) {
        newArrayToReturn.push(element[index]);
      }

      arrayToReturn.push(newArrayToReturn);
      // arrayToReturn.push(element.slice(1));
    }
  }

  return arrayToReturn;
};

const one = flattenDepth([1, 2, [3, [4]], 5]);

console.log(one);
