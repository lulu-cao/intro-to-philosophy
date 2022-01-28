const router = require("express").Router();
const readingsRoutes = require("./readings");

// readings routes
router.use("/readings", readingsRoutes);

module.exports = router;
