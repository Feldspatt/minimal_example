const express = require('express');
const getNodes = require("../requests_to_contech/graphQLcall");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/graphql', async function (req, res, next) {
  let contechResponse = await getNodes()
  res.send(contechResponse);
})

module.exports = router;
