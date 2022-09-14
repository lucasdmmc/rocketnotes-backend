const { Router } = require("express")
const tagsRouter = Router()

const TagsController = require("../controllers/TagsController.js")
const tagsController = new TagsController()
 
tagsRouter.get("/:user_id", tagsController.index)

module.exports = tagsRouter
