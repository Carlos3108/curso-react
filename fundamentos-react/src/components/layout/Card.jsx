import React from "react";

import "./Card.css"

export default function Card(props){
    const cardEstilo = {
        backgroundColor: props.color || '#b51105',
        borderColor: props.color || '#b51105'
    }
    return (
        <div className="Card" style={cardEstilo}>
            <div className="Titulo">{ props.titulo }</div>
            <div className="Conteudo">
                {props.children}
            </div>
        </div>
    )
}