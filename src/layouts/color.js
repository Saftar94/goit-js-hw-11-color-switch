const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyEl: document.querySelector('body'),
}

const { startBtn, stopBtn, bodyEl } = refs

startBtn.addEventListener('click', startclor)
stopBtn.addEventListener('click', stopInterval)

let index = 0
let arr_count = colors.length - 0
let isActive = false
function startclor() {
  if (isActive) {
    return
  }
  isActive = true

  intervalId = setInterval(() => {
    console.log(colors[index])

    if (index == arr_count) {
      index = 0
    } else {
      bodyEl.style.backgroundColor =
        colors[randomIntegerFromInterval([0], colors.length - 1)]
      startBtn.style.color =
        colors[randomIntegerFromInterval([0], colors.length - 1)]
    }
  }, 1000)
}

function stopInterval() {
  clearInterval(intervalId)
  isActive = false
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
