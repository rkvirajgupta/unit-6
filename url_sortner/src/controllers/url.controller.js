const express = require('express');

const validUrl = require('valid-url');

const router = express.Router()

const Url = require('../models/url.model')

const baseUrl = 'http:localhost:5000'

router.post('/shorten', async (req, res) => {
    const {
        longUrl,urlCode
    } = req.body 

    // destructure the longUrl from req.body.longUrl

    // check base url if valid using the validUrl.isUri method
    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).send('Invalid base URL')
    }


    // check long url if valid using the validUrl.isUri method

    if (validUrl.isUri(longUrl)) {
        try {
            /* The findOne() provides a match to only the subset of the documents 

            in the collection that match the query. In this case, before creating the short URL,

            we check if the long URL was in the DB ,else we create it.
            */
            let url = await Url.findOne({
                longUrl
            })

            // url exist and return the respose
            if (url) {
                res.send(url)
            } else {
                // join the generated short code the the base url
                const shortUrl = baseUrl + '/' + urlCode

                // invoking the Url model and saving to the DB
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                })
                await url.save()
                res.json(url)
            }
        }
        // exception handler
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    } else {
        res.status(401).send(err)
    }
})

module.exports = router