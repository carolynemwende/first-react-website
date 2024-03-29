import React from "react"
import log from "../img/log.png"

class Navlinks extends React.Component{
    render(){
        return(
            <section>
                <div classNameName="navbar">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="/"><img src={log} alt="" style={{ height: '30px' }} /></a>
                            <img alt="" src="../img/logo.png"/>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span  className="navbar-toggler-icon navbar-light"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto topnav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about" id="">ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#design">DESIGN</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        )
    }
}

export default Navlinks
