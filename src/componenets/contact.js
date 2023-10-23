import Img from '../astronaut.png'
function Contact () {
    const img = Img
    return <div id= 'connectt' className='connect'>
        <div>
            <img style={{width:"400px" , height:"400px"}}src={img}/>
            <h1>Let's connect </h1>
            <h2><a href='Abanobmorkos11@gmail.com' target='gmail'>Email: Abanobmorkos11@gmail.com</a></h2>

        </div>
    </div>
}

export default Contact;