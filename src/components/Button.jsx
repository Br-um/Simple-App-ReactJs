function Button(){
    function addNome(){
        console.log('click')
    }
    return(
        <button event={addNome}></button>
    )
}
export default Button