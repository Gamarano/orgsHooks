import { useState, useEffect } from "react";
import { carregaProdutores } from '../servicos/carregaDados';


export default function useProdutores() {
    const [titulo, setTitulo] = useState(''); // sempre chamar useState no principio da função
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    },  []);

    return [titulo, lista];
}