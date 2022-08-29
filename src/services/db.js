const mongoose = require('mongoose');

const Config = require('../config');

const db = () => {
    return mongoose.connect(Config.MONGO_ATLAS_URL, {useNewUrlParse: true})
}

module.exports = db