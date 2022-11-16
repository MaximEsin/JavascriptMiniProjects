// addEventListener

// Use radnom element in document

someDiv.addEventListener("click", function () {
  console.log("YO");
});

// Use whole document as a listener

document.addEventListener("keydown", function (e) {
  if (e.key == "q") {
    console.log("you pressed Q");
  } else {
    console.log("NOT Q");
  }
});
