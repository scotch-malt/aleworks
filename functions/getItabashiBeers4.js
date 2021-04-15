const fetch = require("node-fetch");
require('dotenv').config({
    path: `.env.development`
});

const url4 = process.env.ITABASHI_API_KEY4

exports.handler = async (event, context) => {
    const response = await fetch(url4);
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