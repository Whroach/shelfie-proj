import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)


        this.state = {
            imageInput: "",
            nameInput: "",
            priceInput: 0,
            editForm: this.props.storeId
            
        }
    };

    componentDidMount = () =>{
        // const displayEditForm = document.getElementById("editForm")
        // displayEditForm.addEventListener("click", this.updateProduct)

    }

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

    updateProduct = () => {
        this.setState({updateForm: true})

    }



    render() {
        // const displayEditForm = document.getElementById("editForm")
        // displayEditForm.addEventListener("click", this.updateProduct)
        console.log(this.state.editForm)

        return (
            <div>
                {this.state.updateForm
                ? (
                 <div>
                    <form>
                        <p>Image URL:</p><input value ={this.state.imageInput} onChange={element => this.handleImageChange(element.target.value)}></input>
                        <p>Product Name:</p><input value ={this.state.nameInput} onChange={element => this.handleNameChange(element.target.value)}></input>
                        <p>Price:</p><input value={this.state.priceInput} onChange={element => this.handlePriceChange(element.target.value)}></input>
                        <button onClick={() => this.clearInputs()}>Cancel</button>
                        <button onClick={() => this.submitInputs()}>Save Changes</button>
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
