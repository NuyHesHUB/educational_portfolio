import React, {useRef} from 'react';
import './style/Main.scss'

const Main = () => {
    const titleRef=useRef();
    const handleMouseMove=(rotate)=>{
        let x = (window.innerWidth/2-rotate.clientX)/5;
        let y = (window.innerWidth/2-rotate.clientY)/50;
        titleRef.current.style.transform="rotateY("+ -x + "deg) rotateX("+ y + "deg)";
    }
    const handleMouseOut=()=>{
        titleRef.current.style.transition=".1s ease-in-out"
        titleRef.current.style.transform="rotate(0)"
        
    }
    return (
        <div id="main">
            <header className="main_h">
                <h1><img  src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" /></h1>
                <nav>
                    <ul>
                        <li><a href='#!'>Home</a></li>
                        <li><a href='#!'>Profile</a></li>
                        <li><a href='#!'>Project</a></li>
                        <li><a href='#!'>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main className='main_m'>
                <div className="container" onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
                    <p className='title' ref={titleRef}>
                        HELLO, I'M A<br/>
                        FRONT-END DEVELOPER<br/>
                        <span className='yang'>JOO SEHYEON</span><br/>
                        <span className='go'>JOO SEHYEON</span><br/>
                        <span className='so'>JOO SEHYEON</span><br/>
                        {/* <p className='subtitle'>
                            HELLO, I'M A<br/>
                            FRONT-END DEVELOPER<br/>
                        </p> */}
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Main;