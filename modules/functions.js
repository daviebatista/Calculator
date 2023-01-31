import {main, resultInput, root, input, allowedKeys} from "./elements.js"
import {audio} from "./assets.js"

export function calculate(){
  resultInput.value = 'ERRO!'
  resultInput.classList.add('error')
  const result = eval(input.value)
  console.log('Calculo feito')
  console.log(result)
  resultInput.value = result
  resultInput.classList.remove('error')
  return result
  
}

export function themeFunction () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "rgb(164, 255, 128)")
    root.style.setProperty("--border-color", "#00ff00")
    root.style.setProperty("--font-color", "#1b1b1b")
    root.style.setProperty("--primary-color", "#1b1b1b")
    root.style.setProperty("--text-color","#1b1b1b")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#1b1b1b")
    root.style.setProperty("--border-color", "rgb(164, 255, 128)")
    root.style.setProperty("--font-color", "#029b0a")
    root.style.setProperty("--primary-color", "#00ff00")
    root.style.setProperty("--text-color","#adff9d")
    main.dataset.theme = "dark"
  }
}

export function squareRoot(){
  const result = Math.sqrt(input.value)
  console.log('Calculo feito')
  console.log(result)
  resultInput.value = result
  input.value = result
  return result
}
export function inputFunction(ev) { 
  ev.preventDefault()
  audio.play()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if(ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'Enter'){
    calculate()
  }
  
}

export function clearFunction(){
  resultInput.classList.remove('error')
  input.value = ''
  resultInput.value = ''
  input.focus()
}

export function copyFunction(ev){
  const button = ev.currentTarget
  if(button.innerText === "Clipboard"){
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  }else{
    button.innerText = 'Clipboard'
    button.classList.remove("success")
  }
}

export function buttonFunction (charKeyBtn) {
  charKeyBtn.addEventListener('click', function(){
    audio.play()
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}