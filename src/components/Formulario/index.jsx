import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }
    }, []);

    const alteraNome = (evento) => {
        //console.log(evento.target.value);
        //setNome(evento.target.value)
        setNome(estadoAnterior => {
            //console.log(estadoAnterior);
            return evento.target.value;
        });

    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        //console.log(soma);
        //onsole.log(media);

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                
                <li key={item}>{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota materia B" onChange={event => setMateriaB(parseInt(event.target.value))} />
            <input type="number" placeholder="Nota materia C" onChange={event => setMateriaC(parseInt(event.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;