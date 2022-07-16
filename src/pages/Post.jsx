import Box from '../components/Box'
import Input from '../components/Input'
import Button from '../components/Button'
import React from 'react'

function Post() {
    return (
        <div className='content'>
            <Box
                title="Poste Um Produto"
                wt="400px"
                inputs=
                {
                    <React.Fragment>
                        <Input
                            type="text"
                            label="Produto:"
                            placeholder="Ex: Maça"
                        />
                        <Button
                            value="Cadastrar"
                            wt="100px"
                        />
                    </React.Fragment>
                }
            />
        </div>
    )
}
export default Post