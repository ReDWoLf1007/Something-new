const express = require("express");
const router = express.Router();   //it is a class to create modular, mountable route handlers
const authControllers = require("../controllers/auth-controller");
const signSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


// Using this method because we can concatenate later 

router.route("/").get(authControllers.home);

router.route('/register').post(validate(signSchema.signupSchema), authControllers.register);
router.route('/login').post(validate(signSchema.signinSchema), authControllers.login);

module.exports = router;
