const express = require('express')
const router = express.Router()

const { uploadFile } = require('../middlewares/uploadFile')
const { auth } = require('../middlewares/auth')

const { postCreative, creatives, creative, updateCreative, deleteCreative } = require('../controller/creative')
const { postLink, link, links, updatelink, deletelink } = require('../controller/link')
const { register, login, checkAuth } = require('../controller/auth')
const { users, getuser, updateU, deleteuser } = require('../controller/user')
const { postFeedback, Feedbacks, Feedback } = require('../controller/feedback')

router.post('/register', register)
router.post('/login', login)
router.get('/check-auth', auth, checkAuth)

router.get('/users', users)
router.get('/user/:id', getuser)
router.patch('/user/:id', auth, updateU)
router.delete('/user/:id', auth, deleteuser)

router.post('/link', auth, uploadFile('image'), postLink)
router.get('/links', links)
router.get('/link/:id', link)
router.patch('/link/:id', auth, updatelink)
router.delete('/link/:id', auth, deletelink)

router.post('/creative', uploadFile('image'), auth, postCreative)
router.get('/creatives', creatives)
router.get('/creative/:id', creative)
router.patch('/creative/:id', auth, updateCreative)
router.delete('/creative/:id', auth, deleteCreative)

router.post('/feedback', auth, postFeedback)
router.get('/feedbacks', Feedbacks)
router.get('/feedback/:id', Feedback)

module.exports = router