document.addEventListener('mousedown', clicado,false)
document.addEventListener('mouseup', solto,false)

let primeiro_ponto = []

function clicado(event){
  let end = [event.clientX,event.clientY]
console.log('primeiro ponto: ' + end)
  primeiro_ponto.push(end)
}

function solto(event){
  let end = [event.clientX,event.clientY]
console.log('segundo ponto: ' + end)
  let calc = Math.abs(primeiro_ponto[0][0]-end[0])*Math.abs(primeiro_ponto[0][1]-end[1])
  console.log(calc)
primeiro_ponto = []
}