import { useState, useEffect } from "react";
import CommandLine from "./components/CommandLine"
import Logger from "./components/Logger";
import {Desktop, Rodape} from "./styles/styles"

function App() {

  const [click, setClick] = useState(0)

  const handleClickDesktop = (e) => {

    const comando = sessionStorage.getItem('comando')
    
    if(comando === 'rec'){

      document.getElementById('logger').innerHTML = 'Clique no primeiro ponto'
      
      const ponto = {
        x: e.pageX,
        y: e.pageY
      }
      sessionStorage.setItem(click,JSON.stringify(ponto))
      if(click === 1){

        const primPt = JSON.parse(sessionStorage.getItem(0))
        const segPt = JSON.parse(sessionStorage.getItem(1))

        const areaRec = Math.abs(segPt.x - primPt.x) * Math.abs(segPt.y - primPt.y)

        alert(`Retângulo com área de ${areaRec}`)

        setClick(0)
        sessionStorage.clear()
        return
      }
      setClick(click + 1)
    }
  }

  return (
    <>
      <Desktop onClick={handleClickDesktop}/>
      <Rodape>
        <CommandLine/>
        <Logger />
      </Rodape>
    </>
  );
}

export default App;
