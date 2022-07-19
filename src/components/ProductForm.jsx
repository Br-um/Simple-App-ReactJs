import { useState } from 'react'
import styles from './Form.module.css'
import Input from './Input'
import Button from './Button'
function ProductForm({ handleSubmit, productData }) {

    const [product, setProduct] = useState(productData || {})


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(product)
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
        console.log(product)
    }

    return (
        <form className={styles.Form} onSubmit={submit}>
            <Input
                type="text"
                label="Product:"
                placeholder="Ex: Apple"
                name="name"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                label="Valor:"
                placeholder="Ex: 10"
                name="value"
                handleOnChange={handleChange}
            />
            <Button
                value="Post"
                wt="100px"
                type="submit"
            />
        </form>
    )
}

export default ProductForm