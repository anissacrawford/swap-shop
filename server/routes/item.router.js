const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware')

// GET
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT "user".username, "item".id, "item".item_name, "item".item_image, "item".item_description FROM "user", "item"
  WHERE "user".id = "item".user_id
  ORDER BY "item".id DESC;`;

  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERR in item router GET', err);
  })
});

// POST
router.post('/', (req, res) => {
  // console.log("ITEM ROUTER", req.body.item_name);
  const queryText = `
  INSERT INTO "item" ("item_name", "item_image", "item_description", "user_id") VALUES ($1, $2, $3, $4);`

  const queryValues = [req.body.itemName, req.body.itemImage, req.body.itemDescription, req.user.id]

  pool.query(queryText, queryValues)
  .then(result => {
    res.sendStatus(201)
  }).catch(err => {
    console.log('error in item router POST', err);
    res.sendStatus(500)
  })
});

// UPDATE 



//DELETE
router.delete('/:id', (req, res) => {
  console.log("DELETE", req.user.id);
  const queryText = `
  DELETE FROM "item"  
  WHERE "item".user_id = $1 AND 
  "item".id = $2;`;

  const queryValues = [req.user.id, req.params.id];

  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200);})
    .catch((err) => {
      console.log('Error in DELETE', err);
      res.sendStatus(500);
    });
});

module.exports = router;