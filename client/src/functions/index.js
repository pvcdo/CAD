import React, { useEffect } from "react"

export function criarRec() {
  
}

export const comandos = (e) => {
  const comando = e.target.value

  if(comando!=='' && comando!==undefined){
    if(e.key === "Enter"){
        if(comando === 'rec'){
          sessionStorage.setItem('comando',comando)
        }
        e.target.value = ""
    }
    if(e.key === "Escape"){
        e.target.value = ""
    }
  }
}