import Box from '../components/Box'

function Home(params) {
    return (
        <div className='content'>
            <Box
                title="Welcome!"
                jC="center"
                aI="flex-start"
                description=
                "° Welcome to a simple react app, here you will learn the basics concepts like components and routes "
                githubLink='https://github.com/Br-um'
                github='Br-um'
                linkedin='Henrique Brum'
                linkedinLink='https://www.linkedin.com/in/henrique-b-442255200/'
                instagram='@henriquebrumm'
                instagramLink='https://www.instagram.com/henriquebrumm/'
            />
        </div>
    )
}

export default Home