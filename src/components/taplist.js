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
            allItabashiBeer1 {
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
            allItabashiBeer2 {
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
            allItabashiBeer3 {
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
            allItabashiBeer4 {
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

     let ibeers1 = []
     data.allItabashiBeer1.edges.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.node.name_eng === beerlist[i].node.frontmatter.title ) {
                 ibeers1.push ({
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
            ibeers1.push({
                name_eng: beer.node.name_eng,
                name: beer.node.name,
                style: beer.node.category,
                abv: beer.node.abv,
                ibu: beer.node.ibu,
                image: null
            })
         }  
     }) 

     let ibeers2 = []
     data.allItabashiBeer2.edges.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.node.name_eng === beerlist[i].node.frontmatter.title ) {
                 ibeers2.push ({
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
            ibeers2.push({
                name_eng: beer.node.name_eng,
                name: beer.node.name,
                style: beer.node.category,
                abv: beer.node.abv,
                ibu: beer.node.ibu,
                image: null
            })
         }  
     })

     let ibeers3 = []
     data.allItabashiBeer3.edges.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.node.name_eng === beerlist[i].node.frontmatter.title ) {
                 ibeers3.push ({
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
            ibeers3.push({
                name_eng: beer.node.name_eng,
                name: beer.node.name,
                style: beer.node.category,
                abv: beer.node.abv,
                ibu: beer.node.ibu,
                image: null
            })
         }  
     })

     let ibeers4 = []
     data.allItabashiBeer4.edges.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.node.name_eng === beerlist[i].node.frontmatter.title ) {
                 ibeers4.push ({
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
            ibeers4.push({
                name_eng: beer.node.name_eng,
                name: beer.node.name,
                style: beer.node.category,
                abv: beer.node.abv,
                ibu: beer.node.ibu,
                image: null
            })
         }  
     })
     
     let ibeers = [...ibeers1, ...ibeers2, ...ibeers3, ...ibeers4]

     console.log(ibeers)

     let beers = []

     if (taproom === "itabashi") {
        beers = ibeers
     } else {
         beers = ybeers
     }
     
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