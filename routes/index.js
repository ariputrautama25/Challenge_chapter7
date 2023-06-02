const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const media = require("../controllers/media");
const storage = require("../utils/strorage");;
const multer = require("multer")();
const nodemailer = require("../utils/nodemailer");

const middlewares = require("../utils/middlewares");


router.get("/", (req, res) => {
    return res.status(200).json({
      status: true,
      message: "welcome to challenge 7",
      data: null,
    });
  });
  

router.post("/auth/register", user.register);
router.post("/auth/login", user.login);
router.get("/auth/oauth", user.googleOauth2);
router.get("/auth/whoami", middlewares.auth, user.whoami);
router.get('/reset-password', user.resetPasswordPage);
router.post('/auth/forgot-password', user.forgotPassword);
router.post('/auth/reset-password', user.resetPassword);



router.post(
    "/storage/images",
    storage.image.single("media"),
    media.strogeSingle
  );
  router.post(
    "/storage/multi/images",
    storage.image.array("media"),
    media.storageArray
  );
  router.post("/imagekit/upload", multer.single("media"), media.imagekitUpload);
  
  router.get("/test/mailer", async (req, res) => {
    try {
  
      // send email
      const html = await nodemailer.getHtml('welcome.ejs', {user: {name: 'Nezuko'}});
      nodemailer.sendMail('arieputrautama1998@gmail.com', 'Ini challenge 7', html);
  
      return res.status(200).json({
        status: true,
        message: 'success',
        data: null
      });
    } catch (error) {
      throw error;
    }
  });
  
  module.exports = router;








