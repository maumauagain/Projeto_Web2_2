import React from 'react'
import {Link} from "react-router-dom"
import '../assets/Buy.css'

export default () => {
    return (
        <div className="buy">
            <Link to="/"><button>Voltar</button></Link>
            <h2>Parabens,</h2>
            <p>voce acaba de comprar o produto.</p>
        </div>
    )
}
