const router = require('express').Router();
const articleRouter = require('./articleRouter');

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.use(articleRouter)

module.exports = router