// Then and catch

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)];
    isReady ? resolve("soup is ready") : reject("No soup today");
  }, 2000);
});
console.log(
  promise1
    .then((success) => console.log({ success }))
    .catch((error) => console.log({ error }))
);

// Async and await

// Rules for using async / await:
// 1. You must create a function
// 2. You must use the keyword async
// 3. Use the word await

const getDog = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getDog();

const getSoup = async () => {
  const data = { rating: 0, tip: 0, pay: 0, review: 0 };

  try {
    const response = await promise1;
    console.log(response);
    data.rating = 5;
    data.tip = 0.2;
    data.pay = 10;
    data.review = 5;
    return data;
  } catch (error) {
    console.log(error);
    data.rating = 1;
    data.tip = 0;
    data.pay = 0;
    data.review = 1;
    return data;
  }
};

getSoup().then((value) => console.log(value));
