import '../css/Lista.css'

function Lista(props){

    return(
        props.carrinhos.map(produto => {
            return(
                <div className="pedrinho">
                <h1><strong>Nome: </strong>{produto.nome}</h1>
                <h1><strong>Idade: </strong>{produto.preco}</h1>
                </div>
            )
        })
    )
}

export default Lista;