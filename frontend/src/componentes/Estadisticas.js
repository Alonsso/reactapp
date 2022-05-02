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

    async getEtherPrice(){
        await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((response) => {
            this.setState({etherPrice: response.data.ethereum.usd})
        });
    }
    
    componentDidUpdate(){
    }

    componentDidMount(){
        console.log(this.state.inicio);
    }

    render() {
        return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className='display-4'>Estadísticas</h1>
            <br></br>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Colección</th>
                <th scope="col">Volumen</th>
                <th scope="col">Owners</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </div>
        
        )
    }
}
