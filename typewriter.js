const sentence = "hello there from lighthouse labs";
console.log(sentence)

for (const char of sentence) {
  process.stdout.write(char);
}