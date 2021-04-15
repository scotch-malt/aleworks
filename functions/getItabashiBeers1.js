const fetch = require("node-fetch");
require('dotenv').config({
    path: `.env.development`
});

const url1 = process.env.ITABASHI_API_KEY1

exports.handler = async (event, context) => {
    const response = await fetch(url1);
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