const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// //GET OFFER (gets offers from holding table)
router.get('/offer', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT * FROM "offer";`;
    
    pool.query(queryText)
    .then(result => {
      console.log("HELLO" , result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in offer router GET', err);
      res.sendStatus(500);
    })
  });

//POST OFFER (posts offer to holding table)
router.post('/offer', rejectUnauthenticated, (req, res) => {
    const queryText = `INSERT INTO "offer" ("user_A_id", "item_A_id", "user_B_id", "item_B_id"  )
    VALUES ($1, $2, $3, $4);`
  
    const queryValues = [req.body.user_A_id, req.body.item_A_id, req.body.user_B_id, req.body.item_B_id]
  
    pool.query(queryText, queryValues)
    .then(result => {
      res.sendStatus(201)
    }).catch(err => {
      console.log('error in offer router POST', err);
      res.sendStatus(500)
    })
  });

//ACCEPT OFFER (PUT, UPDATE offer where user id is updated on item)

//DELETE OFFER (DELETE from offer table)