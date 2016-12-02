function trim (string, parameter) {
  var p1 = parameter.toString()
  function noSpace() {
    return string.replace(/\s/g, '')
  }
  return noSpace().replace(parameter, '')
}
