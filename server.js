const express = require('express')
const next = require('next')
const mongoose = require('mongoose');
var graphqlHTTP = require('express-graphql');
const cors = require('cors');
const trucksGQLSchema = require('./db/graphql/schemas/trucks');
const truckModel = require('./db/mongoose/models/trucks');

const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
mongoose.connect('mongodb://admin:temp@ds231090.mlab.com:31090/heroku_7kvc577p');
const db = mongoose.connection;

  //api for trucks
  var GqlData ={
    trucks:[],
    trips:[],
};


db.on('error',(err)=>{
  console.error(err);
});
db.once('open',()=>{
    console.log("we are connected!!");
    truckModel.find({}).exec(function(err,data){
        GqlData.trucks = data;
    })
})


app.prepare()
.then(() => {
  const server = express();
  server.use(cors());  

  server.use('/api', graphqlHTTP({
    schema: trucksGQLSchema,
    rootValue:GqlData,
    graphiql: true,
  }));

  server.get('/', (req, res) => {
    return app.render(req,res,'/home');
  })

  server.get('/trucks', (req, res) => {
    return app.render(req,res,'/trucks');
  });

  server.get('/trucks/:id', (req, res) => {
    const actualPage = '/truck'
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  });

  server.get('edit/trucks/:id', (req, res) => {
    const actualPage = '/edit'
    const queryParams = { id: req.params.id,type:"truck",page:'edit' } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})