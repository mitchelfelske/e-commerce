const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.json([{
    id: "1",
    name: "Avengers - Infity War",
    description: "A Blue Ray movie"
}]))

app.listen(port, () => {
    console.log('Example product service listening on port port!');
})