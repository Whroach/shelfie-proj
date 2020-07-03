import React, { Component }  from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './components/Dashboard';
import Form from './components/Form'
import Header from './components/Header'


export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory: []

    }
  };

  componentDidMount = () => {
    this.getProducts()
  }


  getProducts = () =>{
    axios.get('/api/products')
    .then(res =>
      this.setState({inventory: res.data})
    )
    .catch(error => console.log(error))
  }

  addProduct = (productName, price, image) =>{
    axios.post('/api/product', {productName,price,image})
    .then(res =>{
      this.setState({inventory: res.data})
    })
    .catch(error => console.log(error)) 
  }



  render() {


    return (
      <div>
        <div>
          <Header/>
          <Dashboard inventory={this.state.inventory}/>
          <Form addProductFn={this.addProduct} />
        </div>
      </div>
    )
  }
}

