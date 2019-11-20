import React, { Component } from 'react'
import axios from 'axios'
import '../assets/Products.css'

export default class ProductsList extends Component {
    state = {
        products: []
    };

    getProductsFromApi = () => {
        axios
            .get(`http://localhost:8080/search?name=${this.props.name}`, {
                crossDomain: true
            })
            .then(result => {
                console.log(result.data)
                console.log(this.props.name)
                this.setState({ products: result.data });
            });
    };

    componentDidMount() {
        this.getProductsFromApi();
    }

    sell(id){
        console.log(id)
    }

    render() {
        return (
            <div className="lista">
                {this.state.products.map(element => {
                    console.log(element)
                    return (
                        <div className="prod" key={element._id}>
                            <h2>{element.name}</h2>
                            <img src={element.url} alt="produto"/>
                            <h3>{element.price}</h3>
                            <button onClick={() => this.sell(element._id)}>Vender</button>
                        </div>    
                    )
                })}
            </div>
        )
    }

}
