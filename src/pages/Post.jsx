import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'
import Form from '../components/Form'
import React from 'react'

function Post() {
    return (
        <div className='content'>
            <Box
                title="Poste Um Produto"
                wt="400px"
                form=
                {
                    <Form
                        inputs={
                            <React.Fragment>
                                <Input
                                    type="text"
                                    label="Product:"
                                    placeholder="Ex: Apple"
                                />
                                <Input
                                    type="text"
                                    label="Valor:"
                                    placeholder="Ex: 10"
                                />
                                <Button
                                    value="Post"
                                    wt="100px"
                                />
                            </React.Fragment>
                        }
                    />
                }
            />
        </div>
    )
}
export default Post