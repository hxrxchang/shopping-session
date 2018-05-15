var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let { appleCount, orangeCount, bananaCount } = req.session;
  res.render('index', { appleCount, orangeCount, bananaCount });
});

// ここで各商品のセッションを登録
router.post('/', (req, res) => {
  let { appleCount, orangeCount, bananaCount, } = req.body;

  if (appleCount < 0 || orangeCount < 0 || bananaCount < 0) {
    return res.redirect('/alert');
  }

  req.session.appleCount = appleCount;
  req.session.orangeCount = orangeCount;
  req.session.bananaCount = bananaCount;
  req.session.save(() => {
    res.redirect('/confirm');
  });
});
module.exports = router;
