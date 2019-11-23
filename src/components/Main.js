import React from "react"
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"
import Navlinks from "./Navlinks"


class Main extends React.Component{

    render() {
        return(
            <div>
                 <Navlinks/>
                <Navbar/>
                <Home/>
                <Footer/>
            </div>
        )
    }
}

export default Main;