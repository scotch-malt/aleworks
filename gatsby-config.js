module.exports = {
    plugins: [
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
                name: `product`,
                path: `${__dirname}/products`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images/`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`
        
    ]
}