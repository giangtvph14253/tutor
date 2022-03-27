import React from 'react'

type Props = {}

const ProductItem = (props: any) => {
    return (
        <div>
            {props.items.name}
            <button onClick={() => props.delete(props.items.id)}>Delete</button>
        </div>
    )
}

export default ProductItem