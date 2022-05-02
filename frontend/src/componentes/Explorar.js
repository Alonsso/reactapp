import React, { Component } from 'react'
import axios from 'axios'

export default class Explorar extends Component {

    constructor(props){
        super(props);
        this.state = {
            style: {
                width : 200,
                height: 400
            },
            imageStyle: {
                width: 200,
                height: 200
            },
            collections : [],
        }
    }

    getCollections = async () => {
        return await axios.get("https://api.opensea.io/api/v1/collections?offset=0&limit=300").then((response) => {   
            this.setState({collections: response.data.collections})
        });
    }

    async componentDidMount(){
        await this.getCollections();
    }

    render() {
        console.log(this.state.collections, "ALGO");
        return (
            <>
            <h1 className='display-4 text-center m-5 pb-5'>Explorar</h1>
            <div className=''>
                    <div className='d-flex align-items-center flex-wrap justify-content-center'>{this.state.collections.map((item) => {
                        return <div className="card mr-5 mb-5" key={item.slug} style={this.state.style}>
                            <img src={item.image_url} className="card-img-top" style={this.state.imageStyle} alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <button className="btn btn-primary">Go somewhere</button>
                            </div>
                        </div>
                    })}</div>
            </div>
            </>
        )
    }
}
