import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import TapBeer from "../components/tapbeer";
import "../styles/taplist.scss";

const Taplist = ({taproom}) => {

    const [yurakuchoBeers, setYurakuchoBeers] = useState([]);
    const [itabashiBeers1, setItabashiBeers1] = useState([]);
    const [itabashiBeers2, setItabashiBeers2] = useState([]);
    const [itabashiBeers3, setItabashiBeers3] = useState([]);
    const [itabashiBeers4, setItabashiBeers4] = useState([]);

    useEffect(() => {
        const getYurakuchoTaplist = async () => {
            const response = await fetch("/.netlify/functions/getYurakuchoBeer");
            const data = await response.json();
            setYurakuchoBeers(data);
        }
        const getItabashiTaplist1 = async () => {
            const response = await fetch("/.netlify/functions/getItabashiBeers1");
            const data = await response.json();
            setItabashiBeers1(data);
        }
        const getItabashiTaplist2 = async () => {
            const response = await fetch("/.netlify/functions/getItabashiBeers2");
            const data = await response.json();
            setItabashiBeers2(data);
        }
        const getItabashiTaplist3 = async () => {
            const response = await fetch("/.netlify/functions/getItabashiBeers3");
            const data = await response.json();
            setItabashiBeers3(data);
        }
        const getItabashiTaplist4 = async () => {
            const response = await fetch("/.netlify/functions/getItabashiBeers4");
            const data = await response.json();
            setItabashiBeers4(data);
        }
        getYurakuchoTaplist();
        getItabashiTaplist1();
        getItabashiTaplist2();
        getItabashiTaplist3();
        getItabashiTaplist4();
    }, [])
    
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
            
        }   
    
    `)
     const beerlist = []
     data.allMarkdownRemark.edges.forEach((elem, i) => {
         if (elem.node.frontmatter.pagetype === 'beer') {
             beerlist.push(elem)
         }
     })

     let ybeers = []
     yurakuchoBeers.length && yurakuchoBeers.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.product_name_eng === beerlist[i].node.frontmatter.title ) {
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
                name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
                name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
                style: beer.category_name,
                abv: beer.alcohol,
                ibu: beer.ibu,
                image: null
            })
         }  
     })   

     let ibeers1 = []
     itabashiBeers1.length && itabashiBeers1.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.product_name_eng === beerlist[i].node.frontmatter.title ) {
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
                name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
                name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
                style: beer.category_name,
                abv: beer.alcohol,
                ibu: beer.ibu,
                image: null
            })
         }  
     }) 

     let ibeers2 = []
     itabashiBeers2.length && itabashiBeers2.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.product_name_eng === beerlist[i].node.frontmatter.title ) {
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
                name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
                name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
                style: beer.category_name,
                abv: beer.alcohol,
                ibu: beer.ibu,
                image: null
            })
         }  
     })

     let ibeers3 = []
     itabashiBeers3.length && itabashiBeers3.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.product_name_eng === beerlist[i].node.frontmatter.title ) {
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
                name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
                name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
                style: beer.category_name,
                abv: beer.alcohol,
                ibu: beer.ibu,
                image: null
            })
         }  
     })

     let ibeers4 = []
     itabashiBeers4.length && itabashiBeers4.forEach((beer, i) => {
         let pushed = false
         for (i=0; i < beerlist.length; i++) {  
             if (beer.product_name_eng === beerlist[i].node.frontmatter.title ) {
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
                name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
                name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
                style: beer.category_name,
                abv: beer.alcohol,
                ibu: beer.ibu,
                image: null
            })
         }  
     })
     
     let ibeers = [...ibeers1, ...ibeers2, ...ibeers3, ...ibeers4]

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