// const code = `""""'\`""'''\`\`""""'\`""'''\`\``;
const decode = (code) => {
  const MORSE_NUMBER = new Map([
    [`"""""`, 0],
    [`'""""`, 1],
    [`''"""`, 2],
    [`'''""`, 3],
    [`''''"`, 4],
    [`'''''`, 5],
    [`"''''`, 6],
    [`""'''`, 7],
    [`"""''`, 8],
    [`""""'`, 9],
  ]);
  let result = "";
  code
    .replaceAll("``", ",")
    .split(",")
    .forEach((el) => {
      const codes = el.replaceAll("`", ",").split(",");
      // const codes = MORSE_NUMBER.get(`'""""`);
      let numberStr = "";
      for (let a = 0; a < codes.length; a++) {
        const el2 = codes[a];
        const c = MORSE_NUMBER.get(el2);
        numberStr += c;
      }
      result += String.fromCharCode(numberStr);
    });
  return result;
};
// decode(code);
module.exports = decode;
