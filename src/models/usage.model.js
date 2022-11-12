const mongoose = require('mongoose')

const strT = { type: String, required: true, trim: true }
const numT = { type: Number, required: true }

const usageSchema = mongoose.Schema({
  deviceId: numT,
  clientIp: strT,
  hostName: strT,
  download: numT,
  upload: numT,
  useageSeconds: numT,
  createdAt: strT,
})

const Usage = mongoose.model('usage', usageSchema)
