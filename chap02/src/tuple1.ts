const tuple: [number, boolean, string] = [1, false, "hi"];
tuple[0] = 3;
// tuple[2] = 5; // Type number is not assignable to type string
// tuple[3] = "no"; // Type "no" is not assignable to type undefined
tuple.push("yes");