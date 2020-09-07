const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

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