import Box from '../components/Box'
import web from '../img/web.png'

function Home() {
    return (
        <div className='content'>
            <Box
                title="Welcome!"
                aI="flex-start"
                content=
                "° Welcome to a simple react app, here you will learn the basics concepts like components and routes "
                githubLink='https://github.com/Br-um'
                github='Br-um'
                linkedin='Henrique Brum'
                linkedinLink='https://www.linkedin.com/in/henrique-b-442255200/'
                instagram='@henriquebrumm'
                instagramLink='https://www.instagram.com/henriquebrumm/'
            />
            <img src={web} alt="web" style={{ width : "300px" }} />
        </div>
    )
}

export default Home