const router = require("express").Router();
const users = require("./api/users");
const login = require("./api/login");
const auth = require("./api/auth");

router.use("/api/users", users);
router.use("/api/login", login);
router.use("/api/auth", auth);

module.exports = router;
