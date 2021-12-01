import {useState} from 'react'
import {CL_area, CL} from './styles.js'

export default function CommandLine(){
    
    const tecla = (e) => {
        if(e.key === "Enter"){
            const comando = e.target.value
            alert(`O comando dado foi o ${comando}`)
            e.target.value = ""
        }
        if(e.key === "Escape"){
            e.target.value = ""
        }
    }

    return(
        <>
            <CL_area>
                <CL
                    type="text" 
                    placeholder="Digite aqui o comando"
                    onKeyUp={tecla}
                />
            </CL_area>
        </>
    )
}
