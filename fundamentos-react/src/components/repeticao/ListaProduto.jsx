import './ListaProduto.css';
import React from "react";
import produtos from "../../data/produtos";

export default function ListaProduto(){
    function getLinhas(){
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par': ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div className="ListaProduto"> 
            <table>
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