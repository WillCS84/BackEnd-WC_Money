const { Router } = require("express")
const ReleasesController = require("./controllers/releases")

const router = Router()

router.post("/releases", ReleasesController.create)
router.get("/releases", ReleasesController.read)

module.exports = router
