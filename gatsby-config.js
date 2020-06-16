module.exports = {
    plugins: [
        `gatsby-plugin-sass`, 
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `tomato`
            }
        }
        
    ]
}