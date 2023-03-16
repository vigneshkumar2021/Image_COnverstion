const express = require('express')
const router = express.Router();
const {generateimage} = require('../controller/openaiController')
router.post('/generateimage',generateimage)

module.exports= router