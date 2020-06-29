var MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'exampleDb'

MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
  if (!err) {
    const col = client.db(dbName).collection('widgets')
    // 删除所有 widgets 文档
    col.deleteMany(null, function (err, result) {
      if (!err) {
        // 创建四条记录
        var widget1 = {
          id: 1,
          title: 'First Great widget',
          desc: 'greatest widget of all',
          price: 14.99, 
          type: 'A' 
        }
        var widget2 = {
          id: 2,
          title: 'Second Great widget',
          desc: 'second greatest widget of all',
          price: 29.99, 
          type: 'A'
        }
        var widget3 = {
          id: 3,
          title: 'third widget', 
          desc: 'third widget',
          price: 45.00,
          type: 'B'
        }
        var widget4 = {
          id: 4, 
          title: 'fourth widget', 
          desc: 'fourth widget',
          price: 60.00,
          type: 'B'
        }
        col.insertMany([widget1, widget2, widget3, widget4], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            // 返回所有文档
            // col.find().toArray(function (err, docs) {
            //   console.log(docs)

            //   // 关闭数据库连接
            //   client.close()
            // })
            
            // col.find({type: 'A'}, {projection: {type: 0}}).toArray(function (err, docs) {
            //   if (err) {
            //     console.log(err)
            //   } else {
            //     console.log(docs)

            //     // 关闭数据库
            //     client.close()
            //   }
            // })

            col.find({id: 1}, {projection: {title: 1}}).toArray(function (err, docs) {
              if (err) {
                console.log(err)
              } else {
                console.log(docs)

                // 关闭数据库
                client.close()
              }
            })
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