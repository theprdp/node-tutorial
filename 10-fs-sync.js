const { readFileSync, writeFileSync } = require("fs");
console.log("starting...");
const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "utf8");
// console.log(first);
console.log("done");
writeFileSync(
  "./content/subfolder/result.txt",
  `here is the result ${first},
   ${second}`,
  { flag: "a" }
);
console.log("starting the next one");
