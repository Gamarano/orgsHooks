import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({ onPress, desabilitada = true, preenchida, grande = false }) {
    const estilos = estilosFuncao(grande);

    const getImagem = () => {
        if (preenchida){
            return estrela;
        }
        return estrelaCinza; 
    }

    return <TouchableOpacity //sensação de clique
            onPress={onPress} // efeito que vai ocorrer quando clicado
            disabled={desabilitada} // não pode editar, desabilitado
            >                          
            <Image source={getImagem()} style={estilos.estrela} />
        </TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela:{
        width: grande ? 36 : 12, // se grande 36px senão 12px
        height: grande ? 36 : 12,
        marginRight: 2,
    }
});