function getDomNodesBySelector(selector) {
  return Array.from(document.querySelectorAll(selector))
}

let count = 0
let sum = 0

function applyDiscount() {
  const arr = getDomNodesBySelector('.price-value') 
  count++
  if (count>1) {
    return
  } else {
    arr.forEach(elem => {
      elem.textContent = elem.textContent - (elem.textContent * 0.15)
      sum += +elem.textContent
      document.querySelector('.total-price-value').textContent = sum
    })
  }

}

document.querySelector('.total__button').addEventListener('click', ()=> {
  applyDiscount()
})
  