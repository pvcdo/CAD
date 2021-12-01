import CommandLine from "./components/CommandLine"
import Logger from "./components/Logger";
import {Rodape} from "./styles/styles"

function App() {
  return (
    <Rodape>
      <CommandLine/>
      <Logger />
    </Rodape>
  );
}

export default App;
