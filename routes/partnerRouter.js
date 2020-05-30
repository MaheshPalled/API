const express = require("express");
const bodyParser = require("body-parser");

/**
 * Once you’ve created a router object, you can add middleware and HTTP method routes 
 * (such as get, put, post, and so on) to it just like an application.
 */
const partnerRouter = express.Router();

/**
 * create application/json parser
 */
partnerRouter.use(bodyParser.json());

/**
 * Method to route when  no partnerID is passed in params.
 */
partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the partners: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })
  .delete((req, res) => {
    res.end("Deleting all the partners");
  });

/**
 * Method to route when partnerID is passed in params.
 */
partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end(
      `Will send details of the partner : ${req.params.partnerId} to you`
    );
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /partners/${req.params.partnerId}`
    );
  })
  .put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`);
    res.end(`Will update the partner: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting partnerId: ${req.params.partnerId}`);
  });

module.exports = partnerRouter;
