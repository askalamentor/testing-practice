function capitalize(string) {
  for (let i = 0; i < string.length; i++) {
    // if char is lowercase
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      return (
        string.slice(0, i) +
        string[i].toUpperCase() +
        string.slice(i + 1, string.length)
      );
      // if char is uppercase
    } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      return string;
    }
  }
  // if there is no letter in string
  return 'no valid characters';
}

export default capitalize;
