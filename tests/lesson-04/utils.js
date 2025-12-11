// string

let string = " K20 "
console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());

console.log(string.includes("K"));

let string_replace = "  K20: Fullstack Automation ";
console.log(string_replace.replace("20", "21"));

const arr = string_replace.split(":");
console.log(arr);

console.log(string_replace.substring(0,6));

console.log(string_replace.substring(6));

console.log(string_replace.indexOf("K20"));
console.log(string_replace.substring(string_replace.indexOf("K20")));

//Array
const numbers = [1,2,3,4,5]
const doubled = numbers.map(num=>num*2)



