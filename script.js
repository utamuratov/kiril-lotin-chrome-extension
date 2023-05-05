import { toCyrillic, toLatin } from "./cyrillic-to-latin.js";

const TITLE_CYRILLIC = "Cyrillic";
const TITLE_LATIN = "Latin";
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
  changeConvertTypeAutomatic();

  convertedText.value = latinKiril ? toCyrillic(text) : toLatin(text);
  const copyImg = document.getElementById("copyImg");

  if (copyImg) {
    if (text.length) {
      copyImg.style.display = "inline-block";
      return;
    }
    copyImg.style.display = "none";
  }

  function changeConvertTypeAutomatic() {
    const auto = document.getElementById("auto");
    if (!auto.checked) {
      return;
    }

    let latinLettersCount = 0;
    let cyrillicLettersCount = 0;
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      if ((code >= 65 && code < 91) || (code >= 97 && code < 123)) {
        latinLettersCount++;
        continue;
      }

      if (code >= 1040 && code < 1103) {
        cyrillicLettersCount++;
        continue;
      }
    }

    if (cyrillicLettersCount > latinLettersCount && cyrillicLettersCount >= 3) {
      if (isLatinKiril) {
        isLatinKiril = false;
        latinKiril = isLatinKiril;
        changeSwitcher(isLatinKiril);
      }
    } else if (
      latinLettersCount > cyrillicLettersCount &&
      latinLettersCount >= 3
    ) {
      if (!isLatinKiril) {
        isLatinKiril = true;
        latinKiril = isLatinKiril;
        changeSwitcher(isLatinKiril);
      }
    }
  }
}

// COPY TO CLIPBOARD
function copyToClipboard(element) {
  navigator.clipboard.writeText(element.value);
}

function changeSwitcher(latinToKiril) {
  const from = document.getElementById("from");
  const to = document.getElementById("to");

  if (latinToKiril) {
    from.innerText = TITLE_LATIN;
    to.innerText = TITLE_CYRILLIC;
    text.placeholder = PLACEHOLDER_LATIN;
    convertedText.placeholder = PLACEHOLDER_CYRILLIC;
    return;
  }

  from.innerText = TITLE_CYRILLIC;
  to.innerText = TITLE_LATIN;
  text.placeholder = PLACEHOLDER_CYRILLIC;
  convertedText.placeholder = PLACEHOLDER_LATIN;
}

/**
 *
 * SWITCH COVERT TYPE
 * @param {*} latinToKiril
 * @returns
 */
function changeConverType(latinToKiril = isLatinKiril) {
  isLatinKiril = latinToKiril;
  changeSwitcher(latinToKiril);

  const text = document.getElementById("text");
  const covertedText = document.getElementById("convertedText");

  text.value = covertedText.value;
  convert(text.value);
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

document.getElementById("auto").addEventListener("change", () => {
  if (document.getElementById("auto").checked) {
    convert(document.getElementById("text").value);
  }
});
