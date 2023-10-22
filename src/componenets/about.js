import { useState, useEffect } from "react";

function Home () {
        const attributes = ["Software Engineer", "Full Stack Developer", "Backend Developer" ,"Frontend Developer"];
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % attributes.length);
          }, 2000);
      
          return () => clearInterval(interval);
        }, []);

    return <div className="home-main">
        <nav className="nav">
                
        <ul><a href="https://www.linkedin.com/in/abanob-morkos/">Linkedin</a></ul>

                <ul><a href="https://github.com/abanobmorkos1">Github</a></ul>
                <ul><a href="#About">About</a></ul>
                <ul><a href="#skills">Skills</a></ul>
                <ul><a href="https://docs.google.com/document/d/e/2PACX-1vSY9OOoF9U8IGezdJig83ljOn4zZT3eGAseQ-iDGTrrbCkhYjkOSLCSuoDILIDGfR6jxO2EzTC-9uNx/pub">Resume</a></ul>
        </nav>


    <section id="home">
        <div class="container-home">
            <img id="pic" src="https://media.licdn.com/dms/image/D4E03AQEhNGnTmIHRfg/profile-displayphoto-shrink_400_400/0/1696491860852?e=1703116800&v=beta&t=tg88pyE3H_Hc2Jtx7-dpY4SDE7alYwcmFA5F2NfpPfQ"></img>
            <h1><span id="rotate-text">Hello , I am Abe a {attributes[currentIndex]}</span></h1>
            <p>A Software Engineer with a proven track record in developing scalable web applications and problem-solving with cutting-edge technologies. Proficient in React, Node.js, and AWS, I specialize in crafting efficient and user-friendly applications. My focus is on seamlessly integrating technology to meet specific business requirements and fostering the growth and success of the organization</p>

        </div>
    </section>
    <div className="skills">
    <section id="skills">
        <div class="container-skills">
            <div className="lang">
            <h1>Languages</h1>
            <p> javaScript</p>
            <p> HTML5</p>
            <p> Python</p>
            <p> javaScript</p>
            </div>

            <div className="Frameworks">
            <h1>Frameworks</h1>
            <p> Node.js</p>
            <p> React.js</p>
            <p> Express.js</p>
            <p> jQuery</p>
            <p>Flask</p>
            <p>FastApi</p>
            </div>

            <div className="Database">
            <h1>Databases</h1>
            <p> MongoDB</p>
            <p> MySQL</p>
            <p> Prisma</p>
            <p>Neon</p>
            </div>
        </div>
    </section>
    <section className="proname">
    <h1>Projects</h1>
    </section>
    </div>
    </div>
}

export default Home;