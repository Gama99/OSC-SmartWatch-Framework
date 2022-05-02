var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    const ewelink = require('ewelink-api');
    const connection = new ewelink({
      email: 'leo.apollaro@gmail.com',
      password: '_T4w@PUapouw',
      region: 'us',
    });

    async function toggleFan() {
      await connection.toggleDevice('1000997eff');  //fan
    }

    toggleFan();
    res.send("API is working properly");
});

module.exports = router;