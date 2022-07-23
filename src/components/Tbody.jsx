import styles from '../components/Tbody.module.css'
import { BsPen } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Tbody({ mykey, id, handleRemove, name, value, rmBtn, editBtn }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <tr className={styles.Tbody} key={mykey}>
            <td>{name}</td>
            <td>{value}</td>
            {rmBtn > 0 &&
                <td className={styles.TbodyRemoveButton} onClick={remove}>x</td>
            }
            {editBtn > 0 &&
                <td>
                    <Link to={`/edit/${id}`} className={styles.TbodyEditButton}>
                        <BsPen />Edit
                    </Link>
                </td>
            }
        </tr>
    )
}

export default Tbody