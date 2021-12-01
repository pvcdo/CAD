import {useState} from 'react'
import {CL_area, CL} from './styles.js'

export default function CommandLine(){
    
    const comando = (e) => {
        if(e.key === "Enter"){
            alert("Foi o enter")
        }
        if(e.key === "Escape"){
            alert("Foi o esc")
        }
        
    }

    return(
        <>
            <CL_area>
                <CL
                    type="text" 
                    placeholder="Digite aqui o comando"
                    onKeyUp={comando}
                />
            </CL_area>
        </>
    )
}
