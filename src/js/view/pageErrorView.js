export const errorPageView = function (url) {
  const http = new XMLHttpRequest()
  http.open('HEAD', url, false)
  http.send()
  if (http.status != 404) return true
  else console.log('404')
}
