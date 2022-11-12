const express = require('express');
const Usage = require('../models/usage.model')

const router = express.Router();

router.get('/:date', async (req, res) => {

    let date = req?.params?.date
    let nextDate = new Date(date)
    nextDate = new Date(nextDate.setDate(nextDate.getDate() + 1)).toLocaleDateString().split('/').reverse().join('-')
    try {
        const usageData = await Usage.find({ createdAt: { $gte: date, $lt: nextDate } }).lean().exec()

        return res.status(201).send({ date, usageData })
    }
    catch (err) {
        return res.status(500).json({
            status: 'failed',
            message: err.message
        })
    }
})

module.exports = router