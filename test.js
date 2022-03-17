import Accumulator from "./index.js";

const acc = new Accumulator();

const a = { a: 1, b: "findMeeee" };
const b = { a: 5, c: "find" };
const c = { a: "g", c: "m" };
const d = { a: { b: { c: 5 } }, d: [1, 2] };

acc.setData("generala", a);
acc.setData("generalb", b);
acc.setData("generalc", c);
acc.setData("generald", d);
acc.setData("spread", "asd");
acc.setData("spread", ["one", "two", "tree"], true);

console.log(acc.getData());

console.log(
  acc.findDataByCategory("generala", (item) => {
    return item.b == "findMeeee";
  })
);

console.log(
  acc.findDataByCategory("generalb", (item) => {
    return item.a === 5 && item.c === "find";
  })
);

console.log(
  acc.findAllDataGlobally((item) => {
    return (item.c && typeof item.a === "number") || item === "one";
  })
);

console.log(
  acc.findAllDataGlobally((item) => {
    return item.c;
  })
);

console.log(
  acc.findOneDataGlobally((item) => {
    return item.c;
  })
);

console.log(
  acc.findDataByCategory("generald", (item) => {
    return item.a.b.c === 5 && typeof item.d === "object";
  })
);
