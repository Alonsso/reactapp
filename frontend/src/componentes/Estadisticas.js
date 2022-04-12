import React, { Component } from 'react'
import axios from 'axios'

export default class Estadisticas extends Component {
    constructor(props){
        super(props)
        this.state = { etherPrice : 0, inicio : false}
    }

    handleClick(e){
        e.preventDefault();
        this.getEtherPrice();
        this.setState({inicio : true})
    }
    //response.data.ethereum.usd * Math.random()
    async getEtherPrice(){
        await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((response) => {
            this.setState({etherPrice: response.data.ethereum.usd * Math.random()})
        });
    }
    
    componentDidUpdate(){
        // this.setState({inicio: false})
        // console.log(this.state.inicio + "Se actualiza")
    }

    componentDidMount(){
        console.log(this.state.inicio);
    }

    render() {
        return (
        <div>Estadisticas {this.state.etherPrice}
            <button type="submit" onClick={(e) => {this.handleClick(e)}}>Log in</button>
        </div>
        
        )
    }
}
