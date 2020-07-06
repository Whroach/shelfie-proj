import React from 'react'
import Product from './Product'

export default function Dashboard(props) {


    const mappedInventory = props.inventory.map((element, index) => {
        return <Product value = {element} key ={index} deleteFn={props.deleteFn} saveProductFn={props.saveProductFn} />
      })


    return (
        <div>
            {mappedInventory}
        </div>
    )
}


// import React, { Component } from 'react'
// import Product from './Product'
// import Form from './Form'
// import axios from 'axios'



// export default class Dashboard extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             inventory: []
//         }
//     };

//     componentDidMount = () => {
//         this.getProducts()
//       };


    

//     getProducts = () =>{
//         axios.get('/api/products')
//         .then(res =>
//           this.setState({inventory: res.data})
//         )
//         .catch(error => console.log(error))
//       };




//       addProduct = (name,price,image) =>{

//         let newProduct = {productName: name, price: price, image: image}
    
    
//         axios.post('/api/product', newProduct)
//         .then(res =>{
//           this.setState({inventory: res.data})
//         })
//         .catch(error => console.log(error)) 
//       };



      
//   editProductMethod = (product_id,name,price,image) => {

//     let editProduct = {productName: name, price: price, image: image}

//     axios.put(`/api/product/${product_id}`, editProduct)
//     .then(res => {this.setState({inventory: res.data})})
//     .catch(error => console.log(error))

//   };


  

//   deleteProduct = (id) => {
//     axios.delete(`/api/product/${id}`)
//     .then( () => this.componentDidMount())
//     .catch(error => console.log(error))

//   };


//     render() {

//         const mappedInventory = this.state.inventory.map((element, index) => {
//             return <Product value = {element} key ={index} deleteFn={this.props.deleteFn}  />
//           })

//           const formComp = <Form />
    
//         return (
//             <div>
//                 {mappedInventory}
//                 {formComp}
//             </div>
//         )
//     }
// }
