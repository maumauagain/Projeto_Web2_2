import React, {Component} from 'react'
import ProductsSearch from './ProductSearch'
import ProductsList from "./ProductsList" 
import {Link} from "react-router-dom"
export default class Main extends Component {
    state = {
        name: ""
    }
    render(){
        return (
            <div className="main">
                <ProductsList/>
                <Link to="/prod/"></Link>
                <ProductsSearch name="kindred5"/>
            </div>
        )
    }  
}
