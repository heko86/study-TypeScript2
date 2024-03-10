// union型

function combine(input1: number | string, input2: number | string) {
  let result;
  // ランタイム上での型チェック
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(10, 58);
console.log(combine);

combine("max", "Annma");
