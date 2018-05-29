var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Earning {
    monthly: Int
    total: Int
  }
  type TripExpense {
    petrol:Int
    repairs:Int
    driver:Int
    toll:Int,
    total:Int
  }
  type Trips{
    id: Int
    truck:Int
    from:String
    to:String
    freight_amount:Int
    line_adv: Int
    gross_earning: Int
    net_earning: Int
    expense: TripExpense
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
    trucks(id:Int):[Trucks]
    trips(id:Int):[Trips]
  }
`);

module.exports = schema;