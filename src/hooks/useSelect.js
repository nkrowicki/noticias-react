import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //State del custom hook
    const [state, setState] = useState(stateInicial)

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={(e)=>setState(e.target.value)}
        >
            {opciones.map((opc) => (
                <option key={opc.value} value={opc.value}>{opc.label}</option>
            ))}
        </select>
    )

    return [state, SelectNoticias]
}

export default useSelect;