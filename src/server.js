const app = require('./index.js')
require('dotenv').config()
const connect = require('./configs/db')

app.listen(process.env.PORT, async () => {
    await connect()

    // console.log(`listening on port ${process.env.PORT}`)
})