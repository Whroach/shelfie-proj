import React, { Component } from 'react'

export default class Form extends Component {

    
    constructor(props){
        super(props)
        
        this.state = {
            imageInput: "",
            nameInput: "",
            priceInput: 0,
            toggleForm: false
            
        }
    };


    componentDidUpdate = (prevProps,prevState) =>{
        if(prevProps.storeProduct !== this.props.storeProduct){
            this.toggleForm()
        }

    }

    toggleForm = () => {
        this.setState({toggleForm: !this.state.toggleForm})
      };


    handleImageChange = (value) => {
        this.setState({imageInput: value})


    };

    handleNameChange = (value) => {
        this.setState({nameInput: value})

    };

    handlePriceChange = (value) =>{
        this.setState({priceInput: value})

    };

    clearInputs = () =>{
        this.setState({imageInput: "", nameInput: "", priceInput: ""})

    };

    //if invoked, this method will invoke the addProductFn from parent componet to add users inputs to our db
    submitInputs = () => {

        this.props.addProductFn(this.state.nameInput, this.state.priceInput, this.state.imageInput)


    };

    submitChanges = (product_id) => {
        this.props.editProductFn(product_id,this.state.nameInput, this.state.priceInput, this.state.imageInput)
    }





    render() {
        // const displayEditForm = document.getElementById("editForm")
        // displayEditForm.addEventListener("click", this.updateProduct)
        // const [...storeProduct ] = [this.props]

        const {product_id, product_name, price, image} = this.props.storeProduct

        // console.log(product_name, price)

        return (
            <div>
                {this.state.toggleForm
                ? (
                 <div>
                    <form>
                        <p>Image URL:</p><input placeholder = {image} value ={this.state.imageInput} onChange={element => this.handleImageChange(element.target.value)}></input>
                        <p>Product Name:</p><input placeholder = {product_name} value ={this.state.nameInput} onChange={element => this.handleNameChange(element.target.value)}></input>
                        <p>Price:</p><input placeholder = {price} value={this.state.priceInput} onChange={element => this.handlePriceChange(element.target.value)}></input>
                        <button onClick={() => this.toggleForm()}>Cancel</button>
                        <button onClick={() => this.submitChanges(product_id)}>Save Changes</button>
                    </form>
                </div>
                )
                :
                <div>
                    <form>
                        <p>Image URL:</p><input value ={this.state.imageInput} onChange={element => this.handleImageChange(element.target.value)}></input>
                        <p>Product Name:</p><input value ={this.state.nameInput} onChange={element => this.handleNameChange(element.target.value)}></input>
                        <p>Price:</p><input value={this.state.priceInput} onChange={element => this.handlePriceChange(element.target.value)}></input>
                        <button onClick={() => this.clearInputs()}>Cancel</button>
                        <button onClick={() => this.submitInputs()}>Add Inventory</button>
                    </form>
                </div>
                 }                
            </div>
        )
    }
}
