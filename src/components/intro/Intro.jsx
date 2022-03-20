import "./intro.css"
import undraw from "../../assets/undraw.svg"

const Intro = () => {
  return (
    <div className="i" >
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name" >Ayoub Abidi</h1>
                <h2 className="i-desc">I'm a software engineering student & a junior web developer, currently using:</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item"><span style={{ color: "#41B883" }}>Vue</span>/<span style={{ color: "#61DBFB" }}>React</span></div>
                        <div className="i-title-item" style={{ color: "#7c69ef" }}>Bootstrap</div>
                        <div className="i-title-item" style={{ color: "#F5820D" }}>Firebase</div>
                        <div className="i-title-item">Express</div>
                        <div className="i-title-item"><span style={{ color: "#3fa037" }}>MongoDB</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="i-right">
            <img src={undraw} alt="" className="i-img"/>
        </div>
    </div>
  )
}

export default Intro