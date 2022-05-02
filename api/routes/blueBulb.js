var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    const ewelink = require('ewelink-api');
    const connection = new ewelink({
      email: 'leo.apollaro@gmail.com',
      password: '_T4w@PUapouw',
      region: 'us',
    });

    async function toggleRed() {
      await connection.toggleDevice('10014b26ba');  //blue bulb
    }

    toggleRed();
    res.send("Blue Bulb Triggered");
});

module.exports = router;