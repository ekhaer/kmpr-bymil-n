const router = require('express').Router();
const articleController = require('../controllers/articleController');


router.get('/articles', articleController.getArticle)
router.post('/articles', articleController.postArticle)

module.exports = router