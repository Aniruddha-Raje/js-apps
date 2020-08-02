const a = "John".split("");
const b = a;
const c = "Jane".split("");

b.push(c);

console.log("length of a", a.length);

console.log("value of b", b.slice(-1));

console.log("value of a", a);
