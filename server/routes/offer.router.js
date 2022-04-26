const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

//GET OFFER 
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT * FROM "offer";`;

    // const queryValues = [req.body.userB, req.user.id]

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
    SELECT "user_A_id", "user_id", "item_name", "item_image", "item_description", "user_id"
    FROM "offer", "item";`;

    pool.query(queryText)
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

  const queryValues = [req.body.userA, req.body.itemA];
  
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

  const queryValues = [req.body.userB, req.body.itemB];
  
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