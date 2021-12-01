import { useState } from "react";
import CommandLine from "./components/CommandLine"
import Logger from "./components/Logger";
import {Desktop, Rodape} from "./styles/styles"

function App() {

  const [clicado, setClicado] = useState(false)

  const handleClickDesktop = (e) => {

    const comando = localStorage.getItem('comando')
    //setClicado(true)
    
    if(comando === 'rec'){
      alert("x = " + e.clientX + " | y = " + e.clientY)
      localStorage.removeItem('comando')
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
