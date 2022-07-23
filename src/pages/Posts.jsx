import Box from '../components/Box'
import Message from '../components/Message'
import { useEffect, useState, React } from 'react'
import { useLocation } from 'react-router-dom'
import Tbody from '../components/Tbody'


function Posts() {
    // API
    const API = 'http://localhost:5000'


    // useLocation
    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    // useState
    const [product, setProduct] = useState([])
    // useEffect
    useEffect(() => {
        fetch(API + '/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data)
            })
            .catch((err) => console.log(err))
    }, [])
    // Remove product
    function removeProduct(id) {
        fetch(API + `/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                setProduct(product.filter((prod) => prod.id !== id))
            })
    }

    return (
        <div className="content">
            {message &&
                <Message type="success" msg={message} />
            }
            <Box
                tbody={product &&
                    product.map((val) => (
                        <Tbody
                            mykey={val.id}
                            id={val.id}
                            name={val.name}
                            value={val.value}
                            handleRemove={removeProduct}
                            rmBtn={1}
                            editBtn={1}
                        />
                    ))
                }
                wt="500px"
            />
        </div>
    )
}

export default Posts