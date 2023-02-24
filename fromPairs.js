// Exercise:
// fromPairs([
//   ["a", 1],
//   ["b", 2],
// ]);
// => { 'a': 1, 'b': 2 }

// First basic attempt:

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

// First reduce attempt:

// const fromPairs = (array) => {
//   return array.reduce((acc, current) => {
//     console.log(acc);
//     console.log(current);
//     return { ...acc, [current[0]]: current[1] };
//   }, {});
// };

// Sara's version
const fromPairs = (array) => {
  return array.reduce((acc, [key, value, third]) => {
    console.log(value);
    acc[key] = { value, third };
    return acc;
  }, {});
};

// ===================
const arrayToTest = [
  ["a", 1, "hello"],
  ["b", 2],
];

const newObject = fromPairs(arrayToTest);

console.log(newObject);
