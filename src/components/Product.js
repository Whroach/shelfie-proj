import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {

    // console.log(props.value)

    return (
        <div className='inventory-container'>
            <div className='current-inventory'>
                <img id='image' src={props.value.img}/>
                <p className='inventory-details' >{props.value.name}</p>
                <p className='inventory-details'>{props.value.price}</p>
                <Link to={`/edit-product/${props.value.id}`}><button id='editb'className='inventory-button'>Edit</button></Link>
                <button className='inventory-button' id='deleteb' onClick={() => props.deleteFn(props.value.id)}>Delete</button>
            </div>
            
        </div>
    )
}