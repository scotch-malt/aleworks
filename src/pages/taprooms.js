import React from "react";
import { Link, graphql } from "gatsby";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faInfoCircle, faCompass, faMotorcycle, faUsers } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout";
import Footer from "../components/footer";
import SEO from "../components/seo"
import Img from "gatsby-image";
import "../styles/taprooms.scss";

const Taprooms = ({data}) => {
    
    return (
        <Layout>
            <SEO title={`タップルーム`} />
            <div className="taprooms">
                <div className="taprooms-main">
                    <h1 className="taprooms-main-title">OUR TAPROOMS</h1>
                    <div className="taprooms-main-body">
                        <div className="taprooms-main-body-card">
                            <div className="taprooms-main-body-card-image">
                                <Img 
                                    style={{width: "100%", maxWidth: "80vw", overflow: "visible"}}
                                    fluid={data.itabashiPic.childImageSharp.fluid}
                                    alt="Itabashi Taproom"
                                />
                            </div>
                            <h2 className="taprooms-main-body-card-title">ITABASHI TAPROOM (板橋店)</h2>
                            <div className="taprooms-main-body-card-links">
                                <a href="https://www.ubereats.com/tokyo/food-delivery/%E3%83%88%E3%83%BC%E3%82%AD%E3%83%A7%E3%83%BC-%E3%82%A8%E3%83%BC%E3%83%AB%E3%83%AF%E3%83%BC%E3%82%AF%E3%82%B9-%E3%82%BF%E3%83%83%E3%83%95%E3%83%AB%E3%83%BC%E3%83%A0-tokyo-aleworks-taproom/nxoXAC4YRs6Qyq9yozxuaw" target="_blank" rel="noreferrer noopener">
                                    <button>
                                        <FontAwesomeIcon icon={faMotorcycle} size="2x" /><span>Delivery (UberEats)</span>
                                    </button>
                                </a>
                                <Link to="/itabashi-taproom"><button><FontAwesomeIcon icon={faInfoCircle} size="2x" /><span>店舗情報</span></button></Link>
                                <a href="tel:03-3961-1196"><button><FontAwesomeIcon icon={faPhoneSquare} size="2x" /><span>03-3961-1196</span></button></a>
                                <a href="https://en-gage.net/tokyoaleworks_jobs/" target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon icon={faUsers} size="2x"/><span>求人情報</span></button></a>
                            </div>
                        </div>
                        <div className="taprooms-main-body-card">
                            <div className="taprooms-main-body-card-image">
                                <Img 
                                    style={{width: "100%", maxWidth: "80vw", overflow: "visible"}}
                                    fluid={data.yurakuchoPic.childImageSharp.fluid}
                                    alt="Yurakucho Taproom"
                                />
                            </div>
                            <h2 className="taprooms-main-body-card-title">YURAKUCHO TAPROOM (有楽町店)</h2>
                            <div className="taprooms-main-body-card-links">
                                <a href="https://www.ubereats.com/tokyo/food-delivery/tokyo-aleworks-station-taproom-yurakucho/ks6_WfieROGHZQITYq0qsg" target="_blank" rel="noreferrer noopener">
                                    <button>
                                        <FontAwesomeIcon icon={faMotorcycle} size="2x" /><span>Delivery (UberEats)</span>
                                    </button>
                                </a>
                                <Link to="/yurakucho-taproom"><button><FontAwesomeIcon icon={faInfoCircle} size="2x" /><span>店舗情報</span></button></Link>
                                <a href="tel:03-5843-2787"><button><FontAwesomeIcon icon={faPhoneSquare} size="2x"/><span>03-5843-2787</span></button></a>
                                <a href="https://en-gage.net/tokyoaleworks_jobs/" target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon icon={faUsers} size="2x"/><span>求人情報</span></button></a>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export default Taprooms;

export const pageQuery = graphql`
query taproomsQuery {
  itabashiPic: file(relativePath: { eq: "itabashi_taproom_strip.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  yurakuchoPic: file(relativePath: { eq: "tasty.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
}
` 