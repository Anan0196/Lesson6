function DeleteStrings(sentence, str) {
  let answer = sentence.split(str).join("");
  return answer;
}
console.log(
  DeleteStrings(
    "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather",
    "o"
  )
);
