import Box from '../components/Box'
import Form from '../components/Form'
import React from 'react'

function Post() {

    function createPost(product) {
        product.value = 0
        product.name = []

        fetch('https:/localhost:5000/product', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(product)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
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
                    <Form
                        handleSubmit={createPost}
                    />
                }
            />
        </div>
    )
}
export default Post