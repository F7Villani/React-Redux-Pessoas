import { combineReducers } from "redux";

const pessoasReducers = () => {
    return [
        {
            nome: 'F7',
            sobrenome: 'Villani',
            endereco: 'Rua A, 777'
        },
        {
            nome: 'Renan',
            sobrenome: 'Scheidtzinho',
            endereco: 'Rua B, 666'
        },
        {
            nome: 'Bruno',
            sobrenome: 'Humilde',
            endereco: 'Rua A, 888'
        },
    ]
}   

const pessoaSelecionadaReducer = (pessoaSelecionada = null, acao) => {
    if(acao.type === 'PESSOA_SELECIONADA')
        return acao.payload;
    return pessoaSelecionada;
}

export default combineReducers({
    pessoas: pessoasReducers,
    pessoaSelecionada: pessoaSelecionadaReducer
})