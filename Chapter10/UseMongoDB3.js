var MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

const dbName = 'exampleDb'

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (!err) {
    const col = client.db(dbName).collection('widgets')
    // col.updateOne({id: 4}, {$set: {title: 'Super Bad Widget'}}, function (err, result) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(result)
    //     // 查询更新的文档
    //     col.findOne({id: 4}, function (err, doc) {
    //       if (!err) {
    //         console.log(doc)

    //         // 关闭数据库
    //         client.close()
    //       } else {
    //         console.log(err)
    //       }
    //     })
    //   }
    // })
    
    // 更新
    // col.findOneAndUpdate({id:6}, {$set:{title:'Super Widget', desc:'A really great widget'}}, {upsert:true}, function (err, doc) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(doc)
    //   }
    //   // 关闭数据库
    //   client.close()
    // })

    // col.deleteOne({id:4}, function (err, result) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(result)
    //   }
    //   client.close()
    // })

    col.findOneAndDelete({id: 4}, function (err, result) {
      if (err) {
        console.log(err)
      } else {
        console.log(result)
      }
      client.close()
    })
  } else {
    console.log(err)
  }
})