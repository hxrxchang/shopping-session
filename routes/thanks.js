const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let totalPrice = req.session.totalPrice;
  if (totalPrice) {
    // 先に合計金額を表示して返す
    res.render('thanks', { totalPrice });

    // 返し終わったらセッションを破棄する
    req.session.destroy();
    res.clearCookie('connect.sid', { path: '/' });
  }
  else {
    // セッションに合計金額がなければトップに返す
    res.redirect('/');
  }
});

module.exports = router;
