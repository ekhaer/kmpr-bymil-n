const { Article } = require('../models');
const { Op } = require("sequelize");
const Redis = require("ioredis");
const redis = new Redis();

class AricleController {
    static postArticle(req, res, next) {
        let data = {
            // UserId : req.loggedUser.id,
            author : req.body.author,
            title : req.body.title,
            body : req.body.body
        }
        Article.create(data)
        .then((data) => {
            res.status(201).json({ id : data.id, author : data.author, title: data.title })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    static getArticle(req, res, next) {
        let keyword = '';
        let redisKey = '';
        if (req.query.keyword) {
            keyword = req.query.keyword
            redisKey = keyword
        }
        let condition = {
            [Op.or]: [
                {
                    body : {[Op.iLike]: `%${keyword}%`}
                },
                {
                    title : {[Op.iLike]: `%${keyword}%`}
                }  
            ]
        }
        if (req.query.author) {
            condition.author = req.query.author;
            redisKey = redisKey + '-' + req.query.author;
        }
        redis.get(redisKey)
        .then(result => {
            if (!result) {
                //check query.
                Article.findAll({
                    where : condition,
                    order : [
                        ['createdAt', 'DESC']
                    ]
                })
                .then((data) => {
                        redis.set(redisKey, JSON.stringify(data))
                        console.log("set redis")
                    res.status(200).json(data)
                })
                .catch((err) => {
                    console.log(err)
                })
            } else {
                const data = JSON.parse(result)
                console.log("get from redis");
                res.status(200).json(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = AricleController;