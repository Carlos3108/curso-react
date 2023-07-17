import React, { Fragment } from "react";

export default function Fragmento (props) {
    return (
        <>
            <h2>Fragmento</h2>
            <span>{props.alert}</span>
        </>
    )
}