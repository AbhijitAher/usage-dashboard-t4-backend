const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    return mongoose.connect(`mongodb+srv://${process.env.ATLAS_DATABASE_NAME}:${process.env.ATLAS_DATABASE_PASSWORD}@mini-projects.fm1ubcp.mongodb.net/tantiv4-usage-dashboard`)
}

module.exports = connect