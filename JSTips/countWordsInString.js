//const wordFrequency = (phrase) => {
///let frequency = {};
//let array = phrase.split(" ");
//for (word of array) {
//  if (word in frequency) {
//    frequency[word] += 1;
//  } else {
//    frequency[word] = 1;
//    }
//}
//  return frequency;
//};

//console.log(wordFrequency("dude come on dude dude"));

const wordFrequency = (phrase) => {
  let frequency = {};
  let array = phrase.split(" ");
  array.map((word) => {
    if (word in frequency) {
      frequency[word] += 1;
    } else {
      frequency[word] = 1;
    }
  });
  return frequency;
};
console.log(wordFrequency("ka ka ka ka ka jfjf jfjf jfjf e e e e sdf"));
