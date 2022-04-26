const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// GET PROFILE ITEM
router.get('/getProfile', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT "item".user_id, "user".username, "item".id, "item".item_name, "item".item_image, "item".item_description 
  FROM "user"
  JOIN "item" ON  "user".id = "item".user_id
  WHERE $1 = "item".user_id
  ORDER BY "item".id DESC;`;
  
  pool.query(queryText, [req.user.id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('error in profile item GET', err);
    res.sendStatus(500);
  })
});

// GET SHOP ITEM 
router.get('/getShop', rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT "item".user_id, "user".username, "item".id, "item".item_name, "item".item_image, "item".item_description 
  FROM "user"
  JOIN "item" ON  "user".id = "item".user_id
  WHERE "user".id = "item".user_id
  ORDER BY "item".id DESC;`;
    
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('error in item router GET', err);
    res.sendStatus(500);
  })
});

// POST ITEM
router.post('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
  INSERT INTO "item" ("item_name", "item_image", "item_description", "user_id") 
  VALUES ($1, $2, $3, $4);`

  const queryValues = [req.body.itemName, req.body.itemImage, req.body.itemDescription, req.user.id]

  pool.query(queryText, queryValues)
  .then(result => {
    res.sendStatus(201)
  }).catch(err => {
    console.log('error in item router POST', err);
    res.sendStatus(500)
  })
});

// PUT ITEM
router.put('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `
  UPDATE "item" 
  SET "item_name" = $1, "item_image" = $2, "item_description" = $3
  WHERE "item".id = $4;`;

  const queryValues = [req.body.item_name, req.body.item_image, req.body.item_description, req.params.id];
  
  pool.query(queryText, queryValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch(err => {
          console.log('error in item router PUT', err);
          res.sendStatus(500);
      });
});

// DELETE ITEM
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log("DELETE", req.user.id);
  const queryText = `
  DELETE FROM "item"  
  WHERE "item".user_id = $1 AND 
  "item".id = $2;`;

  const queryValues = [req.user.id, req.params.id];

  pool.query(queryText, queryValues)
    .then((result) => { 
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('error in item router DELETE', err);
      res.sendStatus(500);
    });
});

module.exports = router;