const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

// GET
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `
  SELECT "user".username, "item".id, "item".item_name, "item".item_image, "item".item_description FROM "user", "item"
  WHERE "user".id = "item".user_id
  ORDER BY "item".id DESC;`;

  pool.query(query)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERR in item router GET', err);
  })
});

//POST
router.post('/', (req, res) => {
  
});

module.exports = router;