module.exports = {
    siteMetadata: {
        title: "Tokyo Aleworks",
        description: "Official page of Tokyo Aleworks, the beer, the brewery, and the taprooms. トーキョーエールワークスのオフィシャルウェブサイトです。",
        url: "https://tokyoaleworks.com"
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-plugin-netlify-cms-paths`,
              ],
            },
          },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `news`,
                path: `${__dirname}/news`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `beers`,
                path: `${__dirname}/beers`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `taiken`,
                path: `${__dirname}/taiken`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `food`,
                path: `${__dirname}/food`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `itabashi_info`,
                path: `${__dirname}/info/itabashi`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `yurakucho_info`,
                path: `${__dirname}/info/yurakucho`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `growler_member_shops`,
                path: `${__dirname}/growler-member-shops`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pdfs`,
                path: `${__dirname}/pdf`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                  `gatsby-remark-responsive-iframe`,
                  `gatsby-plugin-netlify-cms-paths`,
                  ],
            },
        },
        `gatsby-plugin-netlify-cms`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
              offset: 300
            }
          },
          {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `limelight`,
                `Yu Gothic`,
                `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
              ],
              display: 'swap'
            }
          }      
    ]
}