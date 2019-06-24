const express = require('express')
const app = express()

app.get('/', (request, response) => {
    throw response.send("Hello, World");
})

app.listen(3050)