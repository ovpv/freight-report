const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
var graphqlHTTP = require("express-graphql");
const cors = require("cors");
const GQLSchema = require("./db/graphql/schemas");
const GqlData = require("./db/graphql");

const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
mongoose.connect(
  "mongodb://admin:temp@ds231090.mlab.com:31090/heroku_7kvc577p"
);
const db = mongoose.connection;

db.on("error", err => {
  console.error(err);
});
db.once("open", () => {
  console.log("we are connected!!");
});

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors());

    server.use(
      "/api",
      graphqlHTTP({
        schema: GQLSchema,
        rootValue: GqlData,
        graphiql: true
      })
    );

    server.get("/", (req, res) => {
      return app.render(req, res, "/home");
    });

    server.get("/trucks", (req, res) => {
      return app.render(req, res, "/trucks");
    });

    server.get("/trips", (req, res) => {
      return app.render(req, res, "/trips");
    });

    server.get("/trips/:id", (req, res) => {
      const actualPage = "/trip";
      const queryParams = { id: req.params.id };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get("/trucks/:id", (req, res) => {
      const actualPage = "/truck";
      const queryParams = { id: req.params.id };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get("edit/trucks/:id", (req, res) => {
      const actualPage = "/edit";
      const queryParams = { id: req.params.id, type: "truck", page: "edit" };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get("edit/trips/:id", (req, res) => {
      const actualPage = "/edit";
      const queryParams = { id: req.params.id, type: "trip", page: "edit" };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
