import styles from './Box.module.css'
import { AiOutlineInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

function Box({
    wt, hg, bk, jC, aI,

    postValue, title, content, form,

    facebook, instagram, github,
    linkedin, facebookLink, instagramLink,
    githubLink, linkedinLink }) {

    return (
        <div
            className={styles.Box}
            style={{
                width: wt,
                heigth: hg,
                background: bk
            }}

            key={postValue &&
                postValue.map(id => [id.id])
            }
        >

            {title &&
                <h3
                    className={styles.BoxH3}
                    style={content && { borderBottom: '2px solid #00fe6e' }}
                >
                    {title && title}</h3>
            }

            {content &&
                <p className={styles.BoxText}
                    style={{
                        justifyContent: jC,
                        alignItems: aI
                    }}
                >
                    {content}</p>}

            {postValue &&
                <table className={styles.BoxTable}>
                    <tr>
                        <th>Nome:</th>
                        <th>Valor</th>
                    </tr>
                    {postValue.map((val) => (
                        <tr>
                            <td>{val.name}</td>
                            <td>{val.value}</td>
                        </tr>
                    ))}
                </table>
            }

            {form &&
                <div className={styles.BoxInputField}>
                    {form}
                </div>
            }
            <ul className={styles.BoxUl}>
                {instagram &&
                    <a href={instagramLink}><li><AiOutlineInstagram />{instagram}</li></a>
                }
                {facebook &&
                    <a href={facebookLink}><li><FaFacebookF />{facebook}</li></a>
                }
                {github &&
                    <a href={githubLink}><li><AiFillGithub />{github}</li></a>
                }
                {linkedin &&
                    <a href={linkedinLink}><li><AiFillLinkedin />{linkedin}</li></a>
                }
            </ul>

        </div>
    )
}
export default Box