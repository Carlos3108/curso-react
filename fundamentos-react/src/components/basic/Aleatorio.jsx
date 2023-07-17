import React from "react";

export default function Aleatorio(props) {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * max + min) + min;
    return (
        <>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor minimo:</strong> {min}
            </p>
            <p>
                <strong>Valor maximo:</strong> {max}
            </p>
            <p>
                <strong>Valor escolhido:</strong> {aleatorio}
            </p>
        </>
    )
}