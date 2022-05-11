// typewriter.js
const typewriter = function (sentence) {
  let timer = 1000;
  for (const char of sentence) {
    timer += 100;
    setTimeout(function () {
        process.stdout.write(char);
    }, timer);
  }
  setTimeout(function() {
    process.stdout.write('\n');
  }, timer);
}

const sentence = "hello there lorem ipsum dolor sit amet";
typewriter(sentence);
//typewriter(sentence);
