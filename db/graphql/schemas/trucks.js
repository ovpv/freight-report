var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Earning {
    monthly: Int
    total: Int
  }
  type Expense {
    monthly: Int
    total: Int
  }
  type Trucks{
    id: Int
    license:String
    model:String
    trips: [Int]
    insurance: Int
    earning: Earning
    expense: Expense
  }
  type Query {
    trucks:[Trucks]
  }
`);

module.exports = schema;