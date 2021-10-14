const express = require('express')
const {getSingleNote,createSingleNote,deleteSingleNote, postSingleNote } = require('../contollers/noteController')

const router = express.Router()

router.get('/add', postSingleNote )
router.get(`/:id`, getSingleNote)
router.post('/new',createSingleNote )
router.delete('/:id',deleteSingleNote )

module.exports = router