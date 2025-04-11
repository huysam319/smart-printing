const base64url = str =>{
  return btoa(str)
  .replace(/\+/g, '-') // Replace all '+' with '-'
  .replace(/\//g, '_') // Replace all '/' with '_'
  .replace(/=+$/, ''); // Remove trailing '='
}
function processString(input) {
  // Use a regular expression to retain only numbers, commas, and hyphens
  return input.replace(/[^0-9,-]/g, '');
}
module.exports = {base64url,processString}