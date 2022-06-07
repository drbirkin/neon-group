const loader = document.querySelector('.loader')

export const loaderView = function () {
  loader.style.display = 'none'
}

export const removeLoader = function () {
  loader.innerHTML = ''
  loader.parentNode.removeChild(loader)
}
