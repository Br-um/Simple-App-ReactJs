import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Box from '../components/Box'
import ProductForm from '../components/ProductForm'

function EditProduct() {
    const API = 'http://localhost:5000'

    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(API + `/product/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProduct(data)
                })
                .catch(err => {
                    console.log(err)
                })
        }, 300)
    }, [id])

    function editProduct(prod) {
        fetch(API + `/product/${product.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prod)
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data)
            })
            .catch(err => console.log(err))
    }
    return (
        <Box
            title={product.name}
            content={
                <ProductForm
                    handleSubmit={editProduct}
                    productData={product}
                />
            }
        />
    )
}

export default EditProduct