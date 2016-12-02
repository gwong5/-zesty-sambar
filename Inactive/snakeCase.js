function snakeCase (string) {
  function underScore (match) {
    return '_' + match.replace(match, '')
  }
  return string.replace(/\s/g, underScore)
}

function snakeCase (string) {
  function underScore (match) {
    var noSpace = match.replace(match, '')
    noSpace.replace(/[^A-Z])
  }
  return string.replace(/\s/g, underScore)
}
