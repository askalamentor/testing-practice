function capitalize(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      return (
        string.slice(0, i) +
        string[i].toUpperCase() +
        string.slice(i + 1, string.length)
      );
    } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      return string;
    }
  }
  return 'no valid characters';
}

export default capitalize;
