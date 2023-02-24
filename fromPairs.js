// fromPairs([
//   ["a", 1],
//   ["b", 2],
// ]);
// => { 'a': 1, 'b': 2 }

// const fromPairs = (array) => {
//   let objectFromArray = {};

//   array.forEach((element) => {
//     try {
//       objectFromArray[element[0]] = element[1];
//     } catch (error) {
//       console.log("Could not create pairs from array passed in");
//     }
//   });

//   return objectFromArray;
// };

const fromPairs = (array) => {
  return array.reduce((acc, current) => {
    console.log(acc);
    console.log(current);
    return { ...acc, [current[0]]: current[1] };
  }, {});
};

const arrayToTest = [
  ["a", 1],
  ["b", 2],
];

const newObject = fromPairs(arrayToTest);

console.log(newObject);
