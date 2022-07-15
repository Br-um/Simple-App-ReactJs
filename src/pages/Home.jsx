import style from './Home.module.css'
import Box from '../components/Box'
import Input from '../components/Input'
function Home(params) {
    return (
        <div className={style.Container}>
            <Box
                title="Bem vindo!"
                jC={{ justifyContent: 'center' }}
                aI={{ alignItems: 'flex-Start' }}
                description=
                "° Welcome to a simple react app, here you will learn the basics concepts like components and routes "
                githubLink='https://github.com/Br-um'
                github='Br-um'
                linkedin='Henrique Brum'
                linkedinLink='https://www.linkedin.com/in/henrique-b-442255200/'
                instagram='@henriquebrumm'
                instagramLink='https://www.instagram.com/henriquebrumm/'
            />
            <Box
                inputs={
                <Input 
                type="text" 
                label="numero"
                />}
            />
        </div>
    )
}

export default Home