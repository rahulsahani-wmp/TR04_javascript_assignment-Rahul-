var input = "mNnameIS--rAHUL";
var output = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] >= "a" && input[i] <= "z") {
    output += input[i].toUpperCase();
  } else {
    output += input[i].toLowerCase();
  }
}

console.log("input string : " + input);

console.log("output string : " + output);
