const obj5 = {name: "zero"} as const;
const arr2 = [1, 3, "five"] as const;
// obj5.name = "ryan"; Cannot assign to "name" because it is a read-only property
// arr2.push(4); Property "push" does not exist on type "readonly [1, 3, "five"]

