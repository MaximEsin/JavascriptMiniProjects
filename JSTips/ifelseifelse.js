const weatherScorer = (weather, weather2) => {
  let score;

  if (weather == "rainy" && weather2 == "overcast") {
    score = 2;
  } else if (weather == "rainy") {
    score = 1;
  } else if (weather == "sunny") {
    score = -1;
  } else {
    score = 0;
  }
  return score;
};
console.log(weatherScorer("sunny"));
