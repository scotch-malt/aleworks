module.exports = {
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sass`,
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
                path: `${__dirname}/src/images/`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [`gatsby-remark-responsive-iframe`],
            },
        },
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
              offset: 300
            }
          }       
    ]
}