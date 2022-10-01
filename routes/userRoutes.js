const { 
    getHomepage,
    createData
 } = require("../controllers/userController");

// import router
const router = require("express").Router();



router.route("/").get(getHomepage)


router.route("/create-data").post(createData)



module.exports = router;