var express = require('express');
var router = express.Router();

/* get session listing. */
router.get('/', (req, res) => {
    req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
    res.send(`Kamu telah mengunjungi halaman ini sebanyak ${req.session.counter} kali.`);
});

module.exports = router;