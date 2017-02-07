const db = require('./db')
const CLOSED_ITEMS_TABLE = process.env.CLOSED_ITEMS_TABLE

module.exports = (event, context, callback) => {
  db.scan({
    TableName: CLOSED_ITEMS_TABLE,
  }, function(err, items) {
    if (err) return callback(err)

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        items: items,
      })
    })
  })
}
// https://www.infoq.com/articles/mars-rover-application-DynamoDB
