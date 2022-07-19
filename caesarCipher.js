function caesarCipher(str, shift) {
  let array = str.split('');
  let encryptedArray = array.map((char, index) => {
    if (char.toLowerCase() != char.toUpperCase()) {
      let code = str.charCodeAt(index)
      let baseCode = (code > 96) ? 97 : 65;
      let newCode = (((code - baseCode) + shift) % 26) + baseCode
      return String.fromCharCode(newCode)
    } else {
      return char
    }
  });

  return encryptedArray.join('');
};

export { caesarCipher };