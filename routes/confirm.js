const express = require('express');
const router = express.Router();
const applePrice = 100;
const bananaPrice = 200;
const orangePrice = 150;

router.get('/', (req, res) => {
  // 各商品の個数
  let { appleCount, orangeCount, bananaCount, } = req.session;

  if (!(appleCount || orangeCount || bananaCount)) {
    return res.redirect('/');
  }
  // 各商品の金額計算
  let appleAmount = appleCount * applePrice;
  let bananaAmount = bananaCount * bananaPrice;
  let orangeAmount = orangeCount * orangePrice;

  // 全商品の合計
  let totalPrice = appleAmount + bananaAmount + orangeAmount;

  req.session.totalPrice = totalPrice;
  req.session.save(() => {
    res.render('confirm', { appleCount, orangeCount, bananaCount, appleAmount, bananaAmount, orangeAmount, totalPrice });
  });
});

module.exports = router;