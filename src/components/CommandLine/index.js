import {CL_area, CL} from './styles.js'
import { comandos } from '../../functions/index.js'

export default function CommandLine(){

    return(
        <>
            <CL_area>
                <CL
                    type="text" 
                    placeholder="Digite aqui o comando"
                    onKeyUp={comandos}
                />
            </CL_area>
        </>
    )
}
