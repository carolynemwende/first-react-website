import React from "react"

class Footer extends React.Component{
    
    render(){
        return(
        <section >
            <div className="footer">
                <div className="container  py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 id="contact">Have a need? <br/>
                                Let’s find a solution.</h2>
                                <p>Get insights and updates</p>
                        </div>
                        <div  className="col-md-3 links pl-5 pt-3">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>Connected content</li>
                                <li>Contact</li>
                                <li>Careers</li>
                                <li>Connect.ID</li>
                            </ul>
                        </div>
                        <div className="col-md-3 links pt-3 pl-5">
                        <h3>Follow me on</h3>
                            <ul>
                                <li><a href="https://www.behance.net/carolynemwende">Behance</a></li>
                                <li><a href="https://twitter.com/home">Twitter</a></li>
                                <li><a href="https://www.instagram.com/">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/carolyne-mwende-675b79184/">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 links pt-3 pl-5">
                        <h3>My skills</h3>
                            <ul>
                                <li>HTML & CSS</li>
                                <li>JavaScript</li>
                                <li>React Framework</li>
                                <li>Graphic design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright py-3">
                <p>copyright@carolynemwende2019</p>
            </div>
        </section>
        )
    }
}





export default Footer