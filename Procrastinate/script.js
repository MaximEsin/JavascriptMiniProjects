let phrases = [
  {
    text: "send funny picture to a friend",
    image: "https://code.s3.yandex.net/web-code/procrastinate/1.gif",
  },
  {
    text: "check sales on plane tickets",
    image: "https://code.s3.yandex.net/web-code/procrastinate/2.png",
  },
  {
    text: "google what rappers sing about",
    image: "https://code.s3.yandex.net/web-code/procrastinate/3.png",
  },
  {
    text: "watch videos",
    image: "https://code.s3.yandex.net/web-code/procrastinate/4.png",
  },
  {
    text: "sort books on shelfs by color",
    image: "https://code.s3.yandex.net/web-code/procrastinate/5.png",
  },
  {
    text: "check salary in San Francisco",
    image: "https://code.s3.yandex.net/web-code/procrastinate/6.png",
  },
  {
    text: "check news and write comment",
    image: "https://code.s3.yandex.net/web-code/procrastinate/7.png",
  },
  {
    text: "listen to sad music and remember all mistakes made in youth",
    image: "https://code.s3.yandex.net/web-code/procrastinate/8.png",
  },
  {
    text: "check series trailer and first season",
    image: "https://code.s3.yandex.net/web-code/procrastinate/9.png",
  },
  {
    text: "check unread telegramm chats",
    image: "https://code.s3.yandex.net/web-code/procrastinate/10.png",
  },
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let advice = document.querySelector(".advice");
let image = document.querySelector(".image");

button.addEventListener("click", function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, "textContent", randomElement.text);
  smoothly(image, "src", randomElement.image);

  if (randomElement.text.length > 40) {
    advice.style.fontSize = "33px";
  } else {
    advice.style.fontSize = "42px";
  }
});
for (let i = 0; i < 3; i++) {
  smoothly(phrase, "textContent", phrases[i].text);
  smoothly(image, "src", phrases[i].image);
}
