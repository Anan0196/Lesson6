function calculate(arr = [], subject = "") {
  let total;
  if (subject === "+") {
    total = arr.reduce((acc, el) => acc + el);
  } else if (subject === "-") {
    total = arr.reduce((acc, el) => acc - el);
  } else if (subject === "*") {
    total = arr.reduce((acc, el) => acc * el);
  } else if (subject === "/") {
    total = arr.reduce((acc, el) => acc / el);
  }
  return total;
}

console.log(calculate([10, 5, 2], "*"));
