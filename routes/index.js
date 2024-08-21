const express = require("express");
const router = express.Router();
const con = require("../controller/myController");

router.get("/",con.myController);
router.get("/services",con.myService);
router.get("/about",con.myAboutCon);
router.get("/blog-list",con.myBlogCon);
router.get("/bloglist",con.mybloglistCon);
router.get("/contact",con.myContactCon);
                                           

module.exports = router;