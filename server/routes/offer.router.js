const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET OFFER 
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

//GET OFFER (incoming swap)
router.get('/incomingSwap', rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT 
    "SWAP_IN".item_name AS "ITEM_A_NAME", 
    "SWAP_IN".item_image AS "ITEM_A_IMAGE", 
    "SWAP_IN".item_description AS "ITEM_A_DESCRIPTION",
    "SWAP_IN".id AS "ITEM_A_ID",
    
    "SWAP_OUT".item_name AS "ITEM_B_NAME", 
    "SWAP_OUT".item_image AS "ITEM_B_IMAGE", 
    "SWAP_OUT".item_description AS "ITEM_B_DESCRIPTION",
    "SWAP_OUT".id AS "ITEM_B_ID",
    
    "USER_IN".username AS "USER_A_NAME",
    "USER_IN".id AS "USER_A_ID",
    "USER_OUT".username AS "USER_B_NAME",
    "USER_OUT".id AS "USER_B_ID",
	
    "offer".id AS "OFFER_ID"  
    
    FROM "offer"
    JOIN "item" AS "SWAP_IN" ON "offer"."item_A_id" = "SWAP_IN".id
    JOIN "item" AS "SWAP_OUT" ON "offer"."item_B_id" = "SWAP_OUT".id

    JOIN "user" AS "USER_IN" ON "offer"."user_A_id" = "USER_IN".id
    JOIN "user" AS "USER_OUT" ON "offer"."user_B_id" = "USER_OUT".id
    WHERE "offer"."user_A_id" = $1;`

  const queryValues = [req.user.id]

  pool.query(queryText, queryValues)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in offer router GET', err);
      res.sendStatus(500);
    })
});

//POST OFFER 
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

//PUT OFFER (updates offer table with switched values)
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

//PUT OFFER ITEM A (updates item table with new user id)
router.put('/itemA', rejectUnauthenticated, (req, res) => {
  const queryText = `
    UPDATE "item" 
    SET "user_id" = $1
    WHERE "item".id = $2;`;

  const queryValues = [req.body.userB, req.body.itemA];

  pool.query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('error in item router PUT', err);
      res.sendStatus(500);
    });
});

//PUT OFFER ITEM B (updates item table with new user id)
router.put('/itemB', rejectUnauthenticated, (req, res) => {
  const queryText = `
    UPDATE "item" 
    SET "user_id" = $1
    WHERE "item".id = $2;`;

  const queryValues = [req.body.userA, req.body.itemB];

  pool.query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('error in item router PUT', err);
      res.sendStatus(500);
    });
});

//DELETE OFFER 
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `
  DELETE FROM "offer"  
  WHERE "offer".id = $1;`;

  const queryValues = [req.params.id];

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