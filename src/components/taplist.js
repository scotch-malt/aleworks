import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import TapBeer from "../components/tapbeer";
import "../styles/taplist.scss";

const Taplist = ({taproom}) => {
    
    const data = useStaticQuery(graphql`
        query taplistQuery {
            allMarkdownRemark {
                totalCount
                edges {
                    node {
                        html
                        frontmatter {
                            title
                            jtitle
                            image {
                                childImageSharp {
                                  fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                            }
                            style
                            abv
                            ibu
                            brewery
                            location
                            half
                            pint 
                            stem
                            pagetype
                            itabashi
                            yurakucho
                        }
                    }
                }
            }
            allYurakuchoBeer {
                edges {
                    node {
                        abv
                        category
                        ibu
                        name
                        name_eng
                    }
                }
            }
        }   
    
    `)
     const beerlist = []
     data.allMarkdownRemark.edges.forEach((elem, i) => {
         if (elem.node.frontmatter.pagetype === 'beer') {
             beerlist.push(elem)
         }
     })

     let ybeers = []
     data.allYurakuchoBeer.edges.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.node.name_eng === beerlist[i].node.frontmatter.title ) {
                 ybeers.push ({
                     name_eng: beerlist[i].node.frontmatter.title,
                     name: beerlist[i].node.frontmatter.jtitle,
                     style: beerlist[i].node.frontmatter.style,
                     abv: beerlist[i].node.frontmatter.abv,
                     ibu: beerlist[i].node.frontmatter.ibu,
                     image: beerlist[i].node.frontmatter.image
                 })
                 pushed = true
                 break
             } 
         }
         if (pushed === false) {
            ybeers.push({
                name_eng: beer.node.name_eng,
                name: beer.node.name,
                style: beer.node.category,
                abv: beer.node.abv,
                ibu: beer.node.ibu,
                image: null
            })
         }  
     })   

     console.log(ybeers)

     let beers = []
     let itabashi_beers = []
     let yurakucho_beers = []
     data.allMarkdownRemark.edges.forEach(item => {
         if (item.node.frontmatter.pagetype === "beer" && item.node.frontmatter.itabashi === true) {
             itabashi_beers.push(item)
         }
         if (item.node.frontmatter.pagetype === "beer" && item.node.frontmatter.yurakucho === true) {
             yurakucho_beers.push(item)
         }
     })

    //  if (taproom === "itabashi") {
    //     beers = itabashi_beers
    //  } else {
    //      beers = ybeers
    //  }
    beers = ybeers
     
    return (
        <div className="taplist">
            <h1 className="taplist-title">Today's Beers</h1>
            {beers.map((beer, i) => {
                return (
                    <TapBeer 
                        key={i}
                        image={beer.image}
                        name={beer.name_eng}
                        jname={beer.name}
                        style={beer.style}
                        ibu={beer.ibu}
                        abv={beer.abv}
                    />
                )
            })}

        </div>
    );
}

export default Taplist;