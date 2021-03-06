const mongo = require('mongodb').MongoClient
const objectid = require('mongodb').ObjectId
const express = require('express')
const { ObjectId } = require('mongodb')
var cors = require('cors')


const port = 3002
const app = express()
app.use(cors())
const url = 'mongodb://127.0.0.1:27017'
const dbName = "feuchtetubenet"
const tableName = 'embed'
let db
let videos
const including = { mainThumb: 1, tags: 1, iframeSrc: 1, localThumb: 1, germanTitle: 1, germanSlug: 1 }

app.use(express.json())

mongo.connect(
    url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        db = client.db(dbName)
        videos = db.collection(tableName)
    }
)

app.get('/videos', (req, res) => {
    const includeTags = req.query.includeTags
    const excludeTags = req.query.excludeTags
    const skip = parseInt(req.query.skip)
    const limit = parseInt(req.query.limit)
    const order = { _id: -1 }
    const myFilter = { tags: { $all: includeTags, $nin: excludeTags } }

    // console.log("\n\n", includeTags, "include")
    // console.log(excludeTags, "exclude")
    // console.log(skip, "skip")
    // console.log(limit, "limit")
    // console.log(order, "order")
    // console.log(myFilter, "myfilter")

    videos.find(myFilter).project(including).sort(order).limit(limit).skip(skip).toArray((err, items) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json({ videos: items })
    })
})

app.get('/video', (req, res) => {
    let id = req.query.id
    const video = videos.findOne({ _id: ObjectId(id) }, { projection: including }, (err, item) => {
        if (err) {
            console.error(err)
        }
        res.status(200).json({ item })
    })
})

app.get('/video/slug', (req, res) => {
    const slug = req.query.slug
    const video = videos.findOne({ germanSlug: slug }, { projection: including }, (err, item) => {
        if (err) {
            console.error(err)
        }
        res.status(200).json({ item })
    })
})

app.get('/video-count', (req, res) => {
    const result = videos.count({}, (err, item) => {
        if (err) {
            console.error(err)
        }
        res.status(200).json({ numberOfVideos: item })
    })
})

app.listen({ port, host: '0.0.0.0' }, () => console.log('server running on port', port))