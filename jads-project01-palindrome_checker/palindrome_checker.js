const palindrome = (str) => {
  // Checks whether a string is a palindrome (after punctuation has been removed)
  const mod_str = remove_punctuation(str);
  for (let i = 1; i <= mod_str.length / 2; i++) {
    if (!check_mirror_char(mod_str, i)) {
      return false;
    }
  }
  return true;
}

const remove_punctuation = (str) => {
  // Removes puntuation chars from the input string to leave only alpha-numerics in lower case 
  const alphanum = /[a-z0-9]/ig
  return str.match(alphanum).join('').toLowerCase();
}

const check_mirror_char = (str, num) => {
  // Checks that the nth character from the start and end of the string are equal
  const adj = num - 1;
  if (adj) {
    return (str[adj] === str.slice(-num, -adj));
  } else {
    return (str[adj] === str.slice(-num));
  }
}
