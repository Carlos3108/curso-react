import React from "react"
import Primeiro from "./components/basic/Primeiro"
import ComParametro from "./components/basic/ComParametro"
import Fragmento from "./components/basic/Fragmento"
import Aleatorio from "./components/basic/Aleatorio"
import Card from "./components/layout/Card"
import "./App.css"
import Familia from "./components/basic/Familia"
import FamiliaMembro from "./components/basic/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAluno"

export default function App() {
    return (
        <div className="App">
            <h1>Fundamento React</h1>
            <div className="Cards">
                <Card titulo="#01 - Primeiro Componente" color="#422e49">
                    <Primeiro></Primeiro>
                </Card>
                <Card titulo="#02 - Com Parâmetro" color="#bf5600">
                    <ComParametro
                        titulo="Situação dos Alunos"
                        aluno="Carlos"
                        nota={9}
                        status />
                </Card>
                <Card titulo="#03 - Fragmento" color="#985c5e">
                    <Fragmento alert="Cuiado com o erro quando os componentes não estão envolvidos por uma <TAG>." />
                </Card>
                <Card titulo="#04 - Aleatorio">
                    <Aleatorio min={0} max={51}/>
                </Card>
                <Card titulo="#05 - Componentes com filhos" color="#e3c2ac">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Carlos" />
                        <FamiliaMembro nome="Vitoria" />
                        <FamiliaMembro nome="Thais" />
                    </Familia>
                </Card>
                <Card titulo="#06 - Repetição" color="#e76f51">
                    <ListaAlunos/>
                </Card>
            </div>
        </div>
    )
} 

// https://www.color-hex.com/color-palette/1027767 - Referencia de cores