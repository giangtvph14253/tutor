import React, { useEffect, useState } from 'react'
import { getProducts, deleteProducts } from '../apis/productApi'
import ProductItem from '../components/Product'

type Products = {
    id: number,
    name: string
}

type Props = {}

const Home = (props: Props) => {

    const [products, setProduct] = useState<Products[]>([]);
    // destructuring [] = useState(data,()=>{})
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function startCallData() {
            setLoading(true)
            const data = await getProducts();
            setProduct(data.data)
            setLoading(false)
        }
        startCallData();
    }, [])

    const deleteProduct = async (id : number) => {
        const data = await deleteProducts(id);
        console.log(data);
        
    }

    return (
        <div>
            {/* {loading ? <div>Loading....</div> : null} */}
            {products.map(item => { //item = {item}
                return <ProductItem items={item} delete={deleteProduct} /> //key(item)={value}({item})
            })}
        </div>
    )
}

export default Home