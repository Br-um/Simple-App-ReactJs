import Box from '../components/Box'
import ProductForm from '../components/ProductForm'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Post() {
    const API = "http://localhost:5000"

    const navigate = useNavigate()

    function createPost(product) {

        fetch(API + "/product", {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)

                navigate('/posts', { message: 'Produto cadastrado com sucesso!' })
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className='content'>
            <Box
                title="Poste Um Produto"
                wt="400px"
                form=
                {
                    <ProductForm
                        handleSubmit={createPost}
                    />
                }
            />
        </div>
    )
}
export default Post