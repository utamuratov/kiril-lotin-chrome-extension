import { kirillga } from "./kril-to-lotin.js";

const KIRIL = "Kiril";
const LATIN = "Latin";
const PLACEHOLDER_LATIN = "Biror matn yozing (lotincha)";
const PLACEHOLDER_KIRIL = "Бирор матн ёзинг (кирилча)";
let isLatinKiril = true;

(function test() {
  changeConverType();
})();

function onClickConvert(text) {
  const convertedText = document.getElementById("convertedText");
  convertedText.innerText = kirillga(text);
  const copyImg = document.getElementById("copyImg");
  if (text.length) {
    copyImg.style.display = "inline-block";
    return;
  }
  copyImg.style.display = "none";
}

function copyToClipboard() {
  const convertedText = document.getElementById("convertedText");
  navigator.clipboard.writeText(convertedText.innerText);
}

function changeConverType(latinToKiril = isLatinKiril) {
  isLatinKiril = latinToKiril;

  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const text = document.getElementById("text");
  const covertedText = document.getElementById("convertedText");

  const reserve = text.value;
  text.value = covertedText.innerText;
  convertedText.innerText = reserve;

  if (isLatinKiril) {
    from.innerText = LATIN;
    to.innerText = KIRIL;
    text.placeholder = PLACEHOLDER_LATIN;
    return;
  }

  from.innerText = KIRIL;
  to.innerText = LATIN;
  text.placeholder = PLACEHOLDER_KIRIL;
}

document
  .getElementById("text")
  .addEventListener("input", (e) => onClickConvert(e.target.value));

document
  .getElementById("convertedTextBlock")
  .addEventListener("click", copyToClipboard);

document
  .getElementById("title")
  .addEventListener("click", () => changeConverType(!isLatinKiril));
