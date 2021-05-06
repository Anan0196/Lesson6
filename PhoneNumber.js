function PhoneNumber(input = "") {
  let digit = input.split("");

  if (digit.length < 10 || digit.length > 11) {
    return "Bad Number";
  } else if (digit.length === 11 && digit[0] === "+") {
    let number = digit.slice(1, digit.length);

    return number.join("");
  } else if (digit.includes("+") || digit.length === 11) {
    return "Bad Number";
  }
  return digit.join("").trim("");
}

console.log(PhoneNumber("+1234567891"));
