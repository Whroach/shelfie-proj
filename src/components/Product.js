import React from 'react'

export default function Product(props) {


    return (
        <div>
            <div>
                <p>{props.value.product_name}</p>
                <p>{props.value.price}</p>
                <button>Edit</button>
                <button onClick={() => props.deleteFn(props.value.product_id)}>Delete</button>
            </div>


            
        </div>
    )
}
