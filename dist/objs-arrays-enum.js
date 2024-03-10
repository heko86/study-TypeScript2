"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple型
// } = {
//   name: "miya",
//   age: 28,
//   hobbies: ["sports", "Cooking"],
//   role: [2, "author"],
// };
// Enumの例
// Admin(管理者):0,Read only user(読取専用):1,Author(作者):2
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "miya",
    age: 28,
    hobbies: ["sports", "Cooking"],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("管理者ユーザー", Role.ADMIN);
}
//# sourceMappingURL=objs-arrays-enum.js.map