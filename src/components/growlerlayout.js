import React from "react"
import Header from "./header"
import Footer from "./growlerfooter"
import "../styles/growlerlayout.scss"

const GrowlerLayout = ({children}) => {
    return (
        <div className="growlerlayout">
            <Header />
            <div className="growlerlayout-main">{children}</div>
            <Footer />
        </div>
    )
}

export default GrowlerLayout