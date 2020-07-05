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
