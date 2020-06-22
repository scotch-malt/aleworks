import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import "../styles/beers.scss";

const Beers = () => {
    return (
        <Layout>
            <div className="beers">
                <div className="beers-main">
                    <h1 className="beers-main-title">Our Beers</h1>
                    <div className="beers-main-body">
                        
                    </div>
                 </div>
            <Footer />
        </div>
        </Layout>
    );
}

export default Beers;