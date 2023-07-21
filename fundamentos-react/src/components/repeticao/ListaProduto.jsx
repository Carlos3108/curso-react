import React from "react";
import produtos from "../../data/produtos";

export default function ListaProduto(){
    function getLinhas(){
        return produtos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco}</td>
                </tr>
            )
        })
    }
    return (
        <div> 
            <table border={1} width={400} align="center">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}                    
                </tbody>
            </table>            
        </div>
    )
}