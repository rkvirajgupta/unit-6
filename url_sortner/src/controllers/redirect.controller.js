const express = require('express')

const router = express.Router()

const Url = require('../models/url.model')


router.get('/:code', async (req, res) => {
    try {

        // find a document match to the code in req.params.code

        const url = await Url.findOne({

            urlCode: req.params.code
        })

        if (url) {

            // when valid we perform a redirect

            return res.redirect(url.longUrl)
        } else {

            // else return a not found 404 status

            return res.status(404).send('No URL Found')
        }

    }
    // exception handler
    catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
})


module.exports = router