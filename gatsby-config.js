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
                path: `${__dirname}/src/images/`
            }
        },
        `gatsby-transformer-remark`,       
    ]
}