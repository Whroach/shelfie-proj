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
      inventory: [],
      storeProduct: []

    }

    this.saveProduct = this.saveProduct.bind(this)
  };

  componentDidMount = () => {
    this.getProducts()
  };




  getProducts = () =>{
    axios.get('/api/products')
    .then(res =>
      this.setState({inventory: res.data})
    )
    .catch(error => console.log(error))
  };



  addProduct = (name,price,image) =>{

    let newProduct = {productName: name, price: price, image: image}


    axios.post('/api/product', newProduct)
    .then(res =>{
      this.setState({inventory: res.data})
    })
    .catch(error => console.log(error)) 
  };




  saveProduct (product)  {
    this.setState({storeProduct: product})

  };





  editProductMethod = (product_id,name,price,image) => {

    let editProduct = {productName: name, price: price, image: image}

    axios.put(`/api/product/${product_id}`, editProduct)
    .then(res => {this.setState({inventory: res.data})})
    .catch(error => console.log(error))

  };


  

  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`)
    .then( () => this.componentDidMount())
    .catch(error => console.log(error))

  };



  render() {

    // console.log(this.state.storeProduct)

    return (
      <div>
        <div>
          <Header/>
          <Dashboard inventory={this.state.inventory} deleteFn={this.deleteProduct} saveProductFn={this.saveProduct} />
          <Form addProductFn={this.addProduct} storeProduct={this.state.storeProduct} editProductFn={this.editProductMethod}/>
        </div>
      </div>
    )
  }
}

