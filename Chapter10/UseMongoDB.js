var MongoClient = require('mongodb').MongoClient

// Connection url
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'exampleDb'

// Connect using MongoClient
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (!err) {
    // Create a collection we want to drop later
    const col = client.db(dbName).collection('widgets')
    // 删除所有 widgets 数据文档
    col.deleteMany(null, function (err, result) {
      if (!err) {
        console.log('result of remove ' + result)
          // 创建两条数据
          var widget1 = {
            title: 'First Greeat widget',
            desc: 'greatest widget of all',
            price: 14.99
          }
          var widget2 = {
            title: 'Second Great widget',
            desc: 'second greatest widget of all',
            price: 299.99
          }

        // col.insertOne(widget1)

        // col.insertOne(widget2, function (err, result) {
        //   if (err) {
        //     // console.log(err)
        //   } else {
        //     console.log(result.ops)
        //     // 关闭数据库
        //     client.close()
        //   }
        // })
        col.insertMany([widget1, widget2], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            console.log(result.ops)
            // 关闭数据库
            client.close()
          }
        })
      } else {
        console.log(err)
      }
    })
  } else {
    console.log(err)
  }
})