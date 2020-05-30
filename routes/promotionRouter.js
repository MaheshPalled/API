const express = require('express');
const bodyParser = require('body-parser');

/**
 * Once you’ve created a router object, you can add middleware and HTTP method routes 
 * (such as get, put, post, and so on) to it just like an application.
 */
const promotionRouter = express.Router();

/**
 * create application/json parser
 */
promotionRouter.use(bodyParser.json());


/**
* Method to route when no pomotionID is passed in params.
*/
promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the promotions to you');
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all promotions');
    });

/**
* Method to route when pomotionID is passed in params.
*/
promotionRouter.route('/:promotionId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
    })
    .put((req, res) => {
        res.write(`Updating the promotion: ${req.params.promotionId}\n`);
        res.end(`Will update the promotion: ${req.body.name}
        with description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting promotionId: ${req.params.promotionId}`);
    });

module.exports = promotionRouter;