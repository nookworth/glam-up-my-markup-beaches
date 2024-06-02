const main = document.body.children[1]

const heroImage = main.appendChild(document.createElement('img'))
// heroImage.setAttribute('src', './assets/boat-beach-768.png')
heroImage.setAttribute(
  'srcset',
  './assets/boat-beach-768.png 768w, ./assets/boat-beach-1025.png 1024w, ./assets/boat-beach-1280.png 1280w,'
)
