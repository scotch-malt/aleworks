const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const fetch = require('node-fetch')
const crypto = require("crypto")
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

const url = process.env.API_KEY
const url1 = process.env.ITABASHI_API_KEY1
const url2 = process.env.ITABASHI_API_KEY2
const url3 = process.env.ITABASHI_API_KEY3
const url4 = process.env.ITABASHI_API_KEY4

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  try {
    const response = await fetch(url);
    const json = await response.json();
    json.forEach(beer => {
        
        createNode({
            id: beer.product_id,
            name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
            name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
            category: beer.category_name,
            abv: beer.alcohol,
            ibu: beer.ibu,

            internal: {
                type: "YurakuchoBeer",
                contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(beer))
                .digest(`hex`),
            },
        })
      })
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await fetch(url1);
    const json = await response.json();
    json.forEach(beer => {
        
        createNode({
            id: beer.product_id,
            name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
            name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
            category: beer.category_name,
            abv: beer.alcohol,
            ibu: beer.ibu,

            internal: {
                type: "Itabashi_Beer1",
                contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(beer))
                .digest(`hex`),
            },
        })
      })
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await fetch(url2);
    const json = await response.json();
    json.forEach(beer => {
        
        createNode({
            id: beer.product_id,
            name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
            name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
            category: beer.category_name,
            abv: beer.alcohol,
            ibu: beer.ibu,

            internal: {
                type: "Itabashi_Beer2",
                contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(beer))
                .digest(`hex`),
            },
        })
      })
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await fetch(url3);
    const json = await response.json();
    json.forEach(beer => {
        
        createNode({
            id: beer.product_id,
            name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
            name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
            category: beer.category_name,
            abv: beer.alcohol,
            ibu: beer.ibu,

            internal: {
                type: "Itabashi_Beer3",
                contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(beer))
                .digest(`hex`),
            },
        })
      })
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await fetch(url4);
    const json = await response.json();
    json.forEach(beer => {
        
        createNode({
            id: beer.product_id,
            name: beer.product_name.replace('<br>', '').replace(/[\s]+/g, ''),
            name_eng: beer.product_name_eng.replace('<br>', '').replace(/\s\s+/g, ' ').replace(':', ': '),
            category: beer.category_name,
            abv: beer.alcohol,
            ibu: beer.ibu,

            internal: {
                type: "Itabashi_Beer4",
                contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(beer))
                .digest(`hex`),
            },
        })
      })
  } catch (error) {
    console.log(error);
  }
  
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      image: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const newsTemplate = path.resolve(`./src/templates/newsTemplate.js`);
    const beerTemplate = path.resolve(`./src/templates/beerTemplate.js`);
    const memberTemplate = path.resolve(`./src/templates/memberTemplate.js`)
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                pagetype
              }
            }
          }
        }
      }
    `)
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.pagetype === "news") {
        createPage({
          path: node.fields.slug,
          component: newsTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      } else if (node.frontmatter.pagetype === "member") {
        createPage({
          path: node.fields.slug,
          component: memberTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      } else {
        createPage({
          path: node.fields.slug,
          component: beerTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      }
        
        
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(result.data.allMarkdownRemark.edges, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: path.resolve("src/templates/tagTemplate.js"),
        context: {
          tag,
        },
      })
    })
}