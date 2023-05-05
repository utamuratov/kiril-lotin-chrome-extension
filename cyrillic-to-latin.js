const LATIN_LETTERS = [
  "A",
  "B",
  "V",
  "G",
  "D",
  "E",
  "Yo",
  "J",
  "Z",
  "I",
  "Y",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "F",
  "X",
  "Ts",
  "Ch",
  "Sh",
  "Sh",
  "'",
  "I",
  "",
  "E",
  "Yu",
  "Ya",
  "G'",
  "Q",
  "H",
  "O'",
  "a",
  "b",
  "v",
  "g",
  "d",
  "e",
  "yo",
  "j",
  "z",
  "i",
  "y",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "f",
  "x",
  "ts",
  "ch",
  "sh",
  "sh",
  "'",
  "i",
  "",
  "e",
  "yu",
  "ya",
  "g'",
  "q",
  "h",
  "o'",
];

const HELPER_LATIN_LETTERS = [
  "A",
  "B",
  "V",
  "G",
  "D",
  "E",
  "‡",
  "J",
  "Z",
  "I",
  "Y",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "F",
  "X",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "Q",
  "H",
  "‡",
  "a",
  "b",
  "v",
  "g",
  "d",
  "e",
  "‡",
  "j",
  "z",
  "i",
  "y",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "f",
  "x",
  "‡",
  "‡",
  "‡",
  "‡",
  "'",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "q",
  "h",
  "‡",
];

const CYRILLIC_LETTERS = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
  "Ғ",
  "Қ",
  "Ҳ",
  "Ў",
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
  "ғ",
  "қ",
  "ҳ",
  "ў",
];

export function toCyrillic(latinText) {
  function replaceSpecialLetters() {
    latinText = latinText.replace(/Ye/g, "Е");
    latinText = latinText.replace(/YE/g, "Е");
    latinText = latinText.replace(/Yo/g, "Ё");
    latinText = latinText.replace(/YO/g, "Ё");
    latinText = latinText.replace(/Ch/g, "Ч");
    latinText = latinText.replace(/CH/g, "Ч");
    latinText = latinText.replace(/Sh/g, "Ш");
    latinText = latinText.replace(/SH/g, "Ш");
    latinText = latinText.replace(/Yu/g, "Ю");
    latinText = latinText.replace(/YU/g, "Ю");
    latinText = latinText.replace(/Ya/g, "Я");
    latinText = latinText.replace(/YA/g, "Я");
    latinText = latinText.replace(/Ts/g, "Ц");
    latinText = latinText.replace(/TS/g, "Ц");

    latinText = latinText.replace(/G\'/g, "Ғ");
    latinText = latinText.replace(/O\'/g, "Ў");

    latinText = latinText.replace(/ye/g, "е");
    latinText = latinText.replace(/yo/g, "ё");
    latinText = latinText.replace(/ch/g, "ч");
    latinText = latinText.replace(/sh/g, "ш");
    latinText = latinText.replace(/yu/g, "ю");
    latinText = latinText.replace(/ya/g, "я");
    latinText = latinText.replace(/ts/g, "ц");
    latinText = latinText.replace(/g\'/g, "ғ");
    latinText = latinText.replace(/o\'/g, "ў");
  }

  function replaceQuotes() {
    latinText = latinText.replace(/`/g, "'");
    latinText = latinText.replace(/ʹ/g, "'");
    latinText = latinText.replace(/ʻ/g, "'");
    latinText = latinText.replace(/ʼ/g, "'");
    latinText = latinText.replace(/ʽ/g, "'");
    latinText = latinText.replace(/ˊ/g, "'");
    latinText = latinText.replace(/ˋ/g, "'");
    latinText = latinText.replace(/‘/g, "'");
  }

  function treatSpecialLetters(currentWord) {
    if (currentWord[0] === "E") {
      return currentWord.replace(/E/i, "Э");
    }

    if (currentWord[0] === "e") {
      return currentWord.replace(/e/i, "э");
    }

    return currentWord;
  }

  function latinToCyrillic(string) {
    let cyrillic = "";
    for (var i = 0; i < string.length; i++) {
      const index = HELPER_LATIN_LETTERS.indexOf(string[i]);
      if (index >= 0) {
        cyrillic += CYRILLIC_LETTERS[index];
        continue;
      }

      cyrillic += string[i];
    }

    return cyrillic;
  }

  replaceQuotes();
  replaceSpecialLetters();

  latinText = latinText.split(" ").map(treatSpecialLetters).join(" ");
  return latinToCyrillic(latinText);
}

export function toLatin(cyrillicText) {
  function treatSpecialLetters(currentWord) {
    function isConsonant(index) {
      return (
        currentWord.charCodeAt(index) !== 1040 &&
        currentWord.charCodeAt(index) !== 1045 &&
        currentWord.charCodeAt(index) !== 1048 &&
        currentWord.charCodeAt(index) !== 1054 &&
        currentWord.charCodeAt(index) !== 1059 &&
        currentWord.charCodeAt(index) !== 1069 &&
        currentWord.charCodeAt(index) !== 1070 &&
        currentWord.charCodeAt(index) !== 1071 &&
        currentWord.charCodeAt(index) !== 1072 &&
        currentWord.charCodeAt(index) !== 1077 &&
        currentWord.charCodeAt(index) !== 1080 &&
        currentWord.charCodeAt(index) !== 1086 &&
        currentWord.charCodeAt(index) !== 1091 &&
        currentWord.charCodeAt(index) !== 1101 &&
        currentWord.charCodeAt(index) !== 1102 &&
        currentWord.charCodeAt(index) !== 1103
      );
    }

    function replaceToCapitalLetter(r, regx, letter) {
      // IF THE NEXT OR PREVIUS LETTER IS CAPITAL, THE LETTER WILL BE CAPITAL
      if (
        (currentWord.charCodeAt(r + 1) >= 1040 &&
          currentWord.charCodeAt(r + 1) <= 1071) ||
        (currentWord.charCodeAt(r - 1) >= 1040 &&
          currentWord.charCodeAt(r - 1) <= 1071)
      ) {
        currentWord = currentWord.replace(regx, letter);
      }
    }

    function replaceFirstLetterTs() {
      if (currentWord[0] === "Ц") {
        currentWord = currentWord.replace(/Ц/, "S");
        return;
      }

      if (currentWord[0] === "ц") {
        currentWord = currentWord.replace(/ц/, "s");
      }
    }

    function treatE() {
      if (currentWord[0] === "Е") {
        if (
          currentWord.charCodeAt(1) >= 1040 &&
          currentWord.charCodeAt(1) <= 1071
        ) {
          return currentWord.replace(/Е/i, "YE");
        }

        return currentWord.replace(/Е/i, "Ye");
      }

      if (currentWord[0] === "е") {
        return currentWord.replace(/е/i, "ye");
      }

      return currentWord;
    }

    replaceFirstLetterTs();

    for (let r = 0; r < currentWord.length; r++) {
      // IF THE PREVIUS LETTER IS CONSONANT, WE SHOULD USE 'S'
      if (currentWord[r] === "Ц") {
        if (isConsonant(r - 1)) {
          currentWord = currentWord.replace(/Ц/i, "S");
          continue;
        }
      }

      if (currentWord[r] === "ц") {
        if (isConsonant(r - 1)) {
          currentWord = currentWord.replace(/ц/i, "s");
        }

        continue;
      }

      // TREAT CAPITAL LETTER
      switch (currentWord[r]) {
        case "Ё":
          replaceToCapitalLetter(r, /Ё/i, "YO");
          continue;
        case "Ц":
          replaceToCapitalLetter(r, /Ц/i, "TS");
          continue;
        case "Ч":
          replaceToCapitalLetter(r, /Ч/i, "CH");
          continue;
        case "Ш":
          replaceToCapitalLetter(r, /Ш/i, "SH");
          continue;

        case "Ю":
          replaceToCapitalLetter(r, /Ю/i, "YU");
          continue;

        case "Я":
          replaceToCapitalLetter(r, /Я/i, "YA");
          continue;

        default:
          break;
      }
    }

    return treatE();
  }

  function cyrillicToLatin(string) {
    let latin = "";
    for (var i = 0; i < string.length; i++) {
      const index = CYRILLIC_LETTERS.indexOf(string[i]);
      if (index >= 0) {
        latin += LATIN_LETTERS[index];
        continue;
      }

      latin += string[i];
    }

    return latin;
  }

  cyrillicText = cyrillicText.split(" ").map(treatSpecialLetters).join(" ");
  return cyrillicToLatin(cyrillicText);
}
