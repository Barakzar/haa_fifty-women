'use strict'
import fiftyWomenData from '../assets/fiftyWomenData.js'

function createWomenGrid(grid,data) {
    for (let i = 0;i<data.imgLinks.length;i++) {
        let figure = document.createElement('figure')
        let img = document.createElement('img')
        let q = document.createElement('q')
        let button = document.createElement('button')
        let figcaption = document.createElement('figcaption')
        let blockquote = document.createElement('blockquote')
        figure.classList.add('women-grid__item','contracted')

        img.src = data.imgLinks[i]
        q.innerText = data.titles[i]
        figcaption.innerText =data.subTitles[i]
        blockquote.innerText = data.texts[i]

        figure.append(img,q,button,figcaption,blockquote)

        grid.append(figure)

    }
    for(let i=0;i<data.textCards.length;i++){
        let section = document.createElement('section')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        h1.innerHTML = '&#8221;'
        p.innerText = data.textCards[i]
        section.append(h1,p)
        grid.children[(i+1)*8].insertAdjacentElement('beforebegin',section)
    }
}
createWomenGrid(document.querySelector('.women-grid'),fiftyWomenData)
// console.log(fiftyWomenData.text[0])