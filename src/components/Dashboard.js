import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'


export default class Dashboard extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          inventory: [],
    
        }
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


    deleteFn = (id) => {
    axios.delete(`/api/product/${id}`)
    .then( () => this.componentDidMount())
    .catch(error => console.log(error))

    };


    render() {


        const mappedInventory = this.state.inventory.map((element,index) => {
            return <Product value = {element} key ={index} deleteFn={this.deleteFn} />
          })


    
        return (
            <div>
                {mappedInventory}
            </div>
        )
    }
}
















// import React from 'react'
// import Product from './Product'

// export default function Dashboard(props) {


//     const mappedInventory = props.inventory.map((element, index) => {
//         return <Product value = {element} key ={index} deleteFn={props.deleteFn} saveProductFn={props.saveProductFn} />
//       })


//     return (
//         <div>
//             {mappedInventory}
//         </div>
//     )
// }

