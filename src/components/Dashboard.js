import React from 'react'
import Product from './Product'

export default function Dashboard(props) {


    const mappedInventory = props.inventory.map((element, index) => {
        return <Product value = {element} key ={index}/>
      })




    return (
        <div>
            {mappedInventory}
        </div>
    )
}
