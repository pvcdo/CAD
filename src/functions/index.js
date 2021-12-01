/*document.addEventListener('mousedown', clicado,false)

let primeiro_ponto = []

function clicado(event){
  let end = [event.clientX,event.clientY]
  alert('primeiro ponto: ' + end)
  primeiro_ponto.push(end)
}

function solto(event){
  let end = [event.clientX,event.clientY]
  alert('segundo ponto: ' + end)
  let calc = Math.abs(primeiro_ponto[0][0]-end[0])*Math.abs(primeiro_ponto[0][1]-end[1])
  alert(calc)
  primeiro_ponto = []
}*/

export function criarRec() {
  
}

export const comandos = (e) => {
  const comando = e.target.value

  if(comando!=='' && comando!==undefined){
    if(e.key === "Enter"){
        if(comando === 'rec'){
          localStorage.setItem('comando',comando)
        }
        e.target.value = ""
    }
    if(e.key === "Escape"){
        e.target.value = ""
    }
  }
}