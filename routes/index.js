const router = require("express").Router();
const users = require("./api/users");
const login = require("./api/login");

router.use("/api/users", users);
router.use("/api/login", login);

module.exports = router;
