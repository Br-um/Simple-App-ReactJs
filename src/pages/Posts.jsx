import Box from '../components/Box'
import { useEffect, useState } from 'react'
function Posts() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/product', {
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

    return (
        <div className="content colAuto">
            <Box
                postValue={product}
            />
        </div>
    )
}

export default Posts