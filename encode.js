module.exports = function (text) {
  let result = "";
  text=text.trim();

  const NUMBER_MORSE = [
    `"""""`,
    `'""""`,
    `''"""`,
    `'''""`,
    `''''"`,
    `'''''`,
    `"''''`,
    `""'''`,
    `"""''`,
    `""""'`,
  ];

  for (let i = 0; i < text.length; i++) {
    const el = text[i];
    const charCode = String(text.charCodeAt(i));
    for (let e = 0; e < charCode.length; e++) {
      const el1 = charCode[e];
      result += NUMBER_MORSE[el1] + "`";
    }
    result += "`";
  }

  return result;
};
// hi('sa')
