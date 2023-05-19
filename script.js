const textElem = document.getElementById('text')
const speedElem = document.getElementById('speed')
const text = 'Choose the speed you want this to show!'

let i = 1
let speed = 300 / speedElem.value

writeText()

function writeText(){
    textElem.innerText = text.slice(0, i)

    i++

    if(i > text.length){
        i = 1
    }

    setTimeout(writeText, speed)
}

speedElem.addEventListener('input', (e) => speed = 300 / e.target.value)