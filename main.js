// listeners
document.querySelector('button').onclick = () => {
  // 1. tomar el valor del input
  const input = document.querySelector('input[type="text"]')
  // 2. crear el li
  const todo = document.createElement('li')
  // 3. asignarle al li, el valor del input
  todo.innerText = input.value
  // 4. agregar el li al ul
  document.querySelector('ul').appendChild(todo)
  // 5. limpiamos el input, porque somos delicados con el usuario
  input.value = ''
}

document.querySelector('ul').onclick = e => {
  if (e.target.style.textDecoration === 'line-through') {
    document.querySelector('ul').removeChild(e.target)
  } else {
    e.target.style.textDecoration = 'line-through'
  }
}
