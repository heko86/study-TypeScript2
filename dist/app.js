"use strict";
function combine(input1, // alias型
input2, //// union型
resultConversion // literal型+union型
// resultConversion2: ConversionDescriptor // // alias型
) {
    let result;
    // ランタイム上での型チェック
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// 結果をnumberで受け取る
const combineAges = combine(10, 58, "as-number");
console.log(combineAges);
const combineStringAges = combine("10", "58", "as-number");
console.log(combineAges);
// 結果をstirngで受けとる
const combinedNames = combine("max", "Annma", "as-text");
console.log(combinedNames);
//# sourceMappingURL=app.js.map