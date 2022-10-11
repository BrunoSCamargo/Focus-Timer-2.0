
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMais = document.querySelector('.mais')
const buttonMenos = document.querySelector('.menos')
const cardPrimary = document.querySelector('.card-primary')
const cardPrimary1 = document.querySelector('.card-primary1')
const cardSeconds = document.querySelector('.card-seconds')
const cardSeconds1 = document.querySelector('.card-seconds1')
const cardThird = document.querySelector('.card-third')
const cardThird1 = document.querySelector('.card-third1')
const cardFourth = document.querySelector('.card-fourth')
const cardFourth1 = document.querySelector('.card-fourth1')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const floresta = new Audio("https://github.com/ljeovani/main/blob/main/audio/Songs%20of%20Florest.mp3?raw=true")
const chuva = new Audio("https://github.com/ljeovani/main/blob/main/audio/Song%20of%20%20Rain.mp3?raw=true")
const cafeteira = new Audio("https://github.com/ljeovani/main/blob/main/audio/Song%20of%20Shooping.mp3?raw=truee")
const lareira = new Audio("https://github.com/ljeovani/main/blob/main/audio/Songs%20of%20Fire%20pit.mp3?raw=true")
let minutes = Number(minutesDisplay.innerText)
let timerOut

function florestaSond() {
  floresta.play()
}
function florestaPause() {
  floresta.pause()
}

function chuvaSond() {
  chuva.play()
}
function chuvaPause() {
  chuva.pause()
}

function cafeteiraSond() {
  cafeteira.play()
}
function cafeteiraPause() {
  cafeteira.pause()
}


function lareiraSond() {
  lareira.play()
}
function lareirapause() {
  lareira.pause()
}



function pressButton() {
  buttonPressAudio.play()
}

function timeEnd() {
  kitchenTimer.play()
}


function resetControls() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

function updateTimerDisplay (newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.innerText = String(newMinutes).padStart(2, "0")
  secondsDisplay.innerText = String(seconds).padStart(2, "0")
}

function resetTimer () {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerOut)
}

function countdown() {
  timerOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.innerText)
    let minutes = Number(minutesDisplay.innerText)
    
    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 & 00 <= 0) {
      resetControls()
      updateTimerDisplay()
      timeEnd()
      return
    }

    if (seconds <= 0) {
      seconds = 2
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function most() {
  minutes = Number(minutesDisplay.textContent) + 5
  minutesDisplay.innerText = String(minutes).padStart(2, "0")
}

function loss() {
  minutes = Number(minutesDisplay.textContent) - 5
  minutesDisplay.innerText = String(minutes).padStart(2, "0")
}


buttonPlay.addEventListener('click', () => {
  pressButton()
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', () => {
  pressButton()
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerOut)
})

buttonStop.addEventListener('click', () => {
  pressButton()
  resetControls()
  resetTimer()

  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonMais.addEventListener('click', () => {
  pressButton()
  most()
})

buttonMenos.addEventListener('click', () => {
  pressButton()
  loss()
})

cardPrimary.addEventListener('click', () => {
  cardPrimary.classList.add(`hide`)
  cardPrimary1.classList.remove(`hide`)
  cardSeconds1.classList.add('hide')
  cardSeconds.classList.remove('hide')
  cardThird1.classList.add('hide')
  cardThird.classList.remove('hide')
  cardFourth1.classList.add('hide')
  cardFourth.classList.remove('hide')
  pressButton()

  florestaSond()
  florestaSond.loop = true
  
  chuvaPause()
  cafeteiraPause()
  lareirapause()
})

cardPrimary1.addEventListener('click', () => {
  cardPrimary1.classList.add(`hide`)
  cardPrimary.classList.remove(`hide`)
  pressButton()

  florestaPause()
})

cardSeconds.addEventListener('click', () => {
  cardSeconds.classList.add('hide')
  cardSeconds1.classList.remove('hide')
  cardPrimary1.classList.add(`hide`)
  cardPrimary.classList.remove(`hide`)
  cardThird1.classList.add('hide')
  cardThird.classList.remove('hide')
  cardFourth1.classList.add('hide')
  cardFourth.classList.remove('hide')
  pressButton()

  chuvaSond()
  chuvaSond.loop = true

  florestaPause()
  cafeteiraPause()
  lareirapause()
})

cardSeconds1.addEventListener('click', () => {
  cardSeconds1.classList.add('hide')
  cardSeconds.classList.remove('hide')
  pressButton()

  chuvaPause()
})

cardThird.addEventListener('click', () => {
  cardThird.classList.add('hide')
  cardThird1.classList.remove('hide')
  cardPrimary1.classList.add(`hide`)
  cardPrimary.classList.remove(`hide`)
  cardSeconds1.classList.add('hide')
  cardSeconds.classList.remove('hide')
  cardFourth1.classList.add('hide')
  cardFourth.classList.remove('hide')
  pressButton()

  cafeteiraSond()
  cafeteiraSond.loop = true

  florestaPause()
  chuvaPause()
  lareirapause()
})

cardThird1.addEventListener('click', () => {
  cardThird1.classList.add('hide')
  cardThird.classList.remove('hide')
  pressButton()
  cafeteiraPause()
})

cardFourth.addEventListener('click', () => {
  cardFourth.classList.add('hide')
  cardFourth1.classList.remove('hide')
  cardPrimary1.classList.add(`hide`)
  cardPrimary.classList.remove(`hide`)
  cardSeconds1.classList.add('hide')
  cardSeconds.classList.remove('hide')
  cardThird1.classList.add('hide')
  cardThird.classList.remove('hide')
  pressButton()

  lareiraSond() 
  lareiraSond.loop = true

  florestaPause()
  chuvaPause()
  cafeteiraPause()
})

cardFourth1.addEventListener('click', () => {
  cardFourth1.classList.add('hide')
  cardFourth.classList.remove('hide')
  pressButton()
  lareirapause()
})