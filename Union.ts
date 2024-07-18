function add(value: number | string): number | string {
  if (typeof value === "number") {
    return value + 1;
  } else {
    return value + value;
  }
}

console.log(add(5));