const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// //GET OFFER (gets offers from holding table)
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT * FROM "offer";`;
  
    pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in offer router GET', err);
      res.sendStatus(500);
    })
  });
  
//POST OFFER (posts offer to offer table)
router.post('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
    INSERT INTO "offer" ("user_A_id", "item_A_id", "user_B_id", "item_B_id")
    VALUES ($1, $2, $3, $4) returning id;`

    const queryValues = [req.body.userA, req.body.itemA, req.body.userB, req.body.itemB]

    pool.query(queryText, queryValues)
    .then(result => {
      res.send(result.rows)
    }).catch(err => {
      console.log('error in offer router POST', err);
      res.sendStatus(500)
    })
  });

//ACCEPT OFFER (PUT, UPDATE offer where user id is updated on item)
router.put('/', rejectUnauthenticated, (req, res) => {
  const queryText = `
    UPDATE "offer" 
    SET "user_A_id" = $1, "item_A_id" = $2, "user_B_id" = $3, "item_B_id" = $4
    WHERE "offer".id = $5;`;

  const queryValues = [req.body.userA, req.body.itemA, req.body.userB, req.body.itemB, req.body.offerId];
  
  pool.query(queryText, queryValues)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch(err => {
          console.log('error in item router PUT', err);
          res.sendStatus(500);
      });
});

//DELETE OFFER (DELETE from offer table)

module.exports = router;