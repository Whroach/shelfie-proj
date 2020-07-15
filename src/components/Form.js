import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            imageInput: "",
            nameInput: "",
            priceInput: 0,
            toggleForm: false,
            storeProduct: {}
            
        }
    };

    componentDidMount = () =>{
        const location = this.props.location
        const  { params }= this.props.match
        const id = parseInt(params.id)

        if(location.pathname !== '/add-product'){
            axios.get(`/api/product/${id}`)
            .then( res => 
                this.setState({
                    toggleForm: true,
                    storeProduct: res.data[0]

                })
                )
            .catch(() => console.log('axios error in Form'))

        }


    
    }



    toggleForm = () => {
        this.setState({toggleForm: !this.state.toggleForm})
      };



    handleInput =(event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    clearInputs = () =>{
        this.setState({imageInput: "", nameInput: "", priceInput: ""})

    };


    addProduct = () =>{
        const { imageInput, nameInput, priceInput } = this.state
    
        let newProduct = {productName: nameInput, price: priceInput, image: imageInput}
    
    
        axios.post('/api/product', newProduct)
        .then( () => console.log('success!!!'))
        .catch(error => console.log(error)) 
      };
    
    
      
      editProductMethod = (id,name,price,image) => {

            let editProduct = {productName: name, price: price, image: image}
        
            axios.put(`/api/product/${id}`, editProduct)
            .then(res => {this.setState({inventory: res.data})})
            .catch(error => console.log(error))
        }




    render() {

        // console.log(this.props)

        console.log(this.state.storeProduct)

        const {id, name, price, image} = this.state.storeProduct


        return (
            <div className = "form"> 
                {this.state.toggleForm
                ? (
                 <div>
                    <form >
                        <p>Image URL:</p><input placeholder = {image} value ={this.state.imageInput} name='imageInput' onChange={(element) => this.handleInput(element)}></input>
                        <p>Product Name:</p><input placeholder = {name} value ={this.state.nameInput} name='nameInput' onChange={(element) => this.handleInput(element)}></input>
                        <p>Price:</p><input placeholder = {price} value={this.state.priceInput} name='priceInput' onChange={(element) => this.handleInput(element)}></input>
                        <button onClick={() => this.toggleForm()}>Cancel</button>
                        <button onClick={() => this.editProductMethod(id)}>Save Changes</button>
                    </form>
                </div>
                )
                :
                <div>
                    <form >
                        <p>Image URL:</p><input value ={this.state.imageInput} name='imageInput' onChange={(element) => this.handleInput(element)}></input>
                        <p>Product Name:</p><input value ={this.state.nameInput} name='nameInput' onChange={(element) => this.handleInput(element)}></input>
                        <p>Price:</p><input value={this.state.priceInput} name='priceInput' onChange={(element) => this.handleInput(element)}></input>
                        <button onClick={() => this.clearInputs()}>Cancel</button>
                        <Link to={'/'}><button onClick={() => this.addProduct()}>Add Inventory</button></Link>
                    </form>
                </div>
                 }                
            </div>
        )
    }
}







