import {useState} from 'react'
import {CL} from './styles.js'

export default function CommandLine(){
    
    const comando = (e) => {
        
    }

    return(
        <>
            <CL 
                placeholder="Digite aqui o comando"
                onKeyUp={comando()}
            />
        </>
    )
}
