// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();
// const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// //GET OFFER (gets offers from holding table)
// router.get('/getProfile', rejectUnauthenticated, (req, res) => {
//     const queryText = `
//     SELECT * FROM "offer";`;
    
//     pool.query(queryText, [req.user.id])
//     .then(result => {
//       console.log("HELLO" , result.rows);
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('error in item router GET', err);
//       res.sendStatus(500);
//     })
//   });

//POST OFFER (posts offer to holding table)
// router.post('/', rejectUnauthenticated, (req, res) => {
//     const queryText = ``
  
//     const queryValues = [req.body.itemName, req.body.itemImage, req.body.itemDescription, req.user.id]
  
//     pool.query(queryText, queryValues)
//     .then(result => {
//       res.sendStatus(201)
//     }).catch(err => {
//       console.log('error in item router POST', err);
//       res.sendStatus(500)
//     })
//   });

//ACCEPT OFFER (PUT, UPDATE offer where user id is updated on item)

//DELETE OFFER (DELETE from offer table)