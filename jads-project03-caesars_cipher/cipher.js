const rot13 = (str) => {
  let result = ""

  for (let i = 0; i < str.length; i++) {
    result += translate_letter(str[i]);
  }

  return result
}

const translate_letter = (letter) => {
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const ind = ALPHABET.indexOf(letter);

  if (ind === -1) {
    return letter;
  } else {
    const new_ind = (ind >= 13) ? ind - 13: ind + 13;
    return ALPHABET[new_ind]
  }
}
