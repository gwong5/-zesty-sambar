var capitalize = function (string) {
  var lower = string.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}

module.exports = { capitalize };
