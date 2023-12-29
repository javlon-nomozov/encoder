function encode(text) {
  let result = "";
  text = text.trim();

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
}
function decode(code) {
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
}

function encodeText() {
  const inputText = document.getElementById("inputText").value;
  const encodedText = encode(inputText);
  document.getElementById("outputText").value = encodedText;
}

function decodeText() {
  const inputText = document.getElementById("inputText").value;
  const decodedText = decode(inputText);
  document.getElementById("outputText").value = decodedText;
}

function copyToClipboard() {
  const outputTextarea = document.getElementById("outputText");
  outputTextarea.select();
  document.execCommand("copy");
}

function pasteText() {
  navigator.clipboard.readText().then((text) => {
    document.getElementById("inputText").value = text;
  });
}
