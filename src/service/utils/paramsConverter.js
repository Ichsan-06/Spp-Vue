export default paramsObj => {
  let paramsString = '?'
  Object.entries(paramsObj).forEach(([key, value]) => {
    paramsString += `${key}=${value}&`
  })

  return paramsString
}
