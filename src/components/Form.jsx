import styles from './Form.module.css'
function Form(props){

    return (
        <form className={styles.Form} action={props.action}>
            {props.inputs}
        </form>
    )
}

export default Form