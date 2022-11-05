const actors = [
  { name: "Johnny", netWorth: 200000 },
  { name: "Amber", netWorth: 20 },
  { name: "Brad", netWorth: 1500000 },
  { name: "Matt", netWorth: 80000 },
  { name: "Leonardo", netWorth: 1000000 },
];
let result = actors.map((actor) => actor.netWorth);
const reduced = result.reduce((prev, curr) => prev + curr);

console.log(reduced);
