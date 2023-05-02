import { kirillga } from "./kril-to-lotin.js";
import { lotinga } from "./kril-to-lotin.js";

const KIRIL = "Cyrillic";
const LATIN = "Latin";
const PLACEHOLDER_LATIN = "Latin";
const PLACEHOLDER_CYRILLIC = "Cyrillic";
let isLatinKiril = true;

// INITIALIZE
(function init() {
  changeConverType();

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  const textFromQueryParam = params.text;

  const text = document.getElementById("text");
  text.value = textFromQueryParam;
  convert(text.value);
})();

// CONVERT TEXT
function convert(
  text,
  convertedText = document.getElementById("convertedText"),
  latinKiril = isLatinKiril
) {
  convertedText.value = latinKiril ? kirillga(text) : lotinga(text);
  const copyImg = document.getElementById("copyImg");

  if (copyImg) {
    if (text.length) {
      copyImg.style.display = "inline-block";
      return;
    }
    copyImg.style.display = "none";
  }
}

// COPY TO CLIPBOARD
function copyToClipboard(element) {
  navigator.clipboard.writeText(element.value);
}

/**
 *
 * SWITCH COVERT TYPE
 * @param {*} latinToKiril
 * @returns
 */
function changeConverType(latinToKiril = isLatinKiril) {
  isLatinKiril = latinToKiril;

  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const text = document.getElementById("text");
  const covertedText = document.getElementById("convertedText");

  const reserve = text.value;
  text.value = covertedText.value;
  convertedText.value = reserve;

  if (isLatinKiril) {
    from.innerText = LATIN;
    to.innerText = KIRIL;
    text.placeholder = PLACEHOLDER_LATIN;
    convertedText.placeholder = PLACEHOLDER_CYRILLIC;
    return;
  }

  from.innerText = KIRIL;
  to.innerText = LATIN;
  text.placeholder = PLACEHOLDER_CYRILLIC;
  convertedText.placeholder = PLACEHOLDER_LATIN;
}

document
  .getElementById("text")
  .addEventListener("input", (e) => convert(e.target.value));

document
  .getElementById("convertedText")
  .addEventListener("input", (e) =>
    convert(e.target.value, document.getElementById("text"), !isLatinKiril)
  );

document
  .getElementById("textCopy")
  .addEventListener("click", () =>
    copyToClipboard(document.getElementById("text"))
  );

document
  .getElementById("convertedTextCopy")
  .addEventListener("click", () =>
    copyToClipboard(document.getElementById("convertedText"))
  );

document
  .getElementById("switcher")
  .addEventListener("click", () => changeConverType(!isLatinKiril));
