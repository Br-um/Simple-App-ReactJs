import Button from './Button'
function Form(){
    function setNome(){
        const nome = 
    }
    return (
        <div>
            <form onSubmit={setNome}>
                <input type="text" name='nome' id='nome'/>
                <Button />
            </form>
        </div>
    )
}
export default Form