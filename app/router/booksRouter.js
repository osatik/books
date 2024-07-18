"use strict"

const express = require('express');
const { updateBook } = require('../controllers/booksController');
const { listBooks } = require('../controllers/booksController');
const { getBook } = require('../controllers/booksController');
const { postBooks } = require('../controllers/booksController');
const { deleteBook } = require('../controllers/booksController');
const router = express.Router();

router.route('/')
    .get(listBooks)
    .post(postBooks)

router.route('/:id') 
    .get(getBook)
    .put(updateBook)
    .patch(updateBook)
    .delete(deleteBook)



module.exports = router