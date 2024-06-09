const main = document.querySelector('main')
main.setAttribute('class', 'parallax')

const ulSection = main.children[1]
console.log({ ulSection })
ulSection.setAttribute('class', 'parallax-layer layer1')

const bgSection = document.createElement('div')
bgSection.setAttribute('class', 'parallax-layer layer2')
ulSection.before(bgSection)
