const validarID = /\d+ID\b/;

console.log(validarID.test("123213123123ID"));
console.log(validarID.test("123213123123"));
console.log(validarID.test("asd"));
console.log(validarID.test("dasdID"));