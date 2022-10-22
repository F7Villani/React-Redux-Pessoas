import React from 'react'
import { connect } from 'react-redux'

const PessoasLista = (props) => {
    console.log(props.pessoas)
    return (
        <div>PessoasLista</div>
    )
}

const mapStateToProps = (state) => {
    return {pessoas: state.pessoas}
}

export default connect(mapStateToProps)(PessoasLista)