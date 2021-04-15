const fetch = require("node-fetch");
require('dotenv').config({
    path: `.env.development`
});

const url = process.env.API_KEY

exports.handler = async (event, context) => {
    const response = await fetch(url);
    const data = await response.json();
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
    }
} 