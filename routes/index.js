const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app

if (process.env.NODE_ENV === "production") {
  router.use(function (req, res) {
    console.log("hit");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
} else {
  router.use(function (req, res) {
    console.log("hit2");
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
}

module.exports = router;
