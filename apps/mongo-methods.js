const mongoClient = require('mongodb').MongoClient;

let test = async () => {
    console.log("test");
    
    const dbClientConnection = await openDBConnection();
    const db = dbClientConnection.db("Core");
    const collection = db.collection("orders");

    const ordersToUpdate = [];
    
    for(x in ordersToUpdate){
        let curr = ordersToUpdate[x];
        console.log("curr => ", curr);

        const query = {
            "orderNumber": curr.orderId,
            "orderType": "NEW"
        }

        let findQueryResponse = await collection.find(query).sort({ timestamp: -1 }).toArray();
        findQueryResponse = findQueryResponse[0];
        console.log("findQueryResponse => ", findQueryResponse);

        if(findQueryResponse.serviceContractNumber != undefined && findQueryResponse.serviceContractNumber != null && findQueryResponse.serviceContractNumber != ""){
            let orderUpdateBody = {
                "timestamp": new Date(Date.parse(curr.paymentResponseDate)),
                "orderNumber": await String(await Math.floor(await Math.pow(10, 12 - 1) + await Math.random() * (await Math.pow(10, 12) - await Math.pow(10, 12 - 1) - 1)))
            }
            console.log("orderUpdateBody => ", orderUpdateBody);

            const insertResponse = await collection.insertOne(orderUpdateBody);
            console.log("insertResponse => " + insertResponse.ops[0].orderNumber);
        }
        else{
            console.log("serviceContractNumber is missing for ", curr.orderId);
        }
    }
        
    await closeDBConnection(dbClientConnection);
    return true;
}

let aggregateGroupTwice = async () => {
    const dbClientConnection = await openDBConnection();
    const db = await dbClientConnection.db("nexus");
    const con = await db.collection("logistics");

    let result = await con.aggregate([
        {
          $group: {
            _id: "$status",
            sum: { $sum: 1 }
          }
        },
        {
          $group: {
            _id: null,
            status: {
              $push: { k: "$_id", v: "$sum" }
            }
          }
        },
        {
          $replaceRoot: {
            newRoot: { $arrayToObject: "$status" }
          }
        }
    ]).toArray();

    console.log("result => ", result);

    return result;
}

let matchAndGroup = async () => {
    const dbClientConnection = await openDBConnection();
    const db = await dbClientConnection.db("nexus");
    const con = await db.collection("logistics");

    let result = await con.aggregate( [
        { $match : { status : "active" } },
        { $group : {_id:"$deliveryPartner.name", count:{$sum:1}}}        
      ]).toArray();

    console.log("result => ", result);

    return result;
}

let avg = async () => {
  const dbClientConnection = await openDBConnection();
  const db = await dbClientConnection.db("logistics");
  const con = await db.collection("logistics");

  let result = await con.aggregate([
    { $match : { "deliveryPartner.deliveryTimeTakenInMinutes" : { $ne: null } } },
    { 
      $group : {
        _id: "$deliveryPartner.name", 
        averageDeliveryTime : {
          $avg : "$deliveryPartner.deliveryTimeTakenInMinutes"
        }
      }}
    ]).toArray();

  console.log("result => ", result);

  return result;
}

let aggregate1 = async () => {
  const dbClientConnection = await openDBConnection();
  const db = await dbClientConnection.db("nexus");
  const con = await db.collection("logistics");

  let result = await con.aggregate([
    { $match : { year : "2022", status: "delivered" } },
    {
      $group: {
        _id: {
          month: "$month",
          deliveryPartner: "$deliveryPartner.name"
        },
        count: {
          $sum: 1
        }
      }
    },
    {
      $sort: {
        count: -1
      }
    },
    {
      $group: {
        _id: "$_id.month",
        v: {
          $push: {
            deliveryPartner: "$_id.deliveryPartner",
            count: "$count"
          }
        }
      }
    },
    {
      $group: {
        _id: null,
        values: {
          $push: {
            k: "$_id",
            v: "$v"
          }
        }
      }
    },
    {
      $replaceRoot: {
        newRoot: {
          "$arrayToObject": "$values"
        }
      }
    }
    ]).toArray();

  console.log("result => ", JSON.stringify(result));

  return result;
}

let aggregate2 = async () => {
  const dbClientConnection = await openDBConnection();
  const db = await dbClientConnection.db("nexus");
  const con = await db.collection("logistics");

  let result = await con.aggregate([
    { $match : { year : "2022", status: "delivered" } },
    {
      $group: {
        _id: {
          month: "$month",
          deliveryPartner: "$deliveryPartner.name"
        },
        count: {
          $sum: 1
        }
      }
    },
    {
      $sort: {
        count: -1
      }
    },
    {
      $group: {
        _id: "$_id.deliveryPartner",
        v: {
          $push: {
            month: "$_id.month",
            count: "$count"
          }
        }
      }
    },
    {
      $sort: {
        count: 1
      }
    },
    {
      $group: {
        _id: null,
        values: {
          $push: {
            k: "$_id",
            v: "$v"
          }
        }
      }
    },
    {
      $replaceRoot: {
        newRoot: {
          "$arrayToObject": "$values"
        }
      }
    }
    ]).toArray();

  console.log("result => ", JSON.stringify(result));

  return result;
}

let insert = async () => {
  const dbClientConnection = await openDBConnection();
  const db = dbClientConnection.db("test");
  const collection = db.collection("user");
  // {createdAt: { $gt: ISODate('2022-11-03') }}

  let insertOneResponse = await collection.insertOne({id: "1", createdAt: await new Date()});
  console.log("insertOneResponse => ", insertOneResponse);

  await closeDBConnection(dbClientConnection);
  return true;
}

let findOne = async () => {
  const dbClientConnection = await openDBConnection();
  const db = await dbClientConnection.db("test");
  const con = await db.collection("user");

  let result = await con.findOne({id:"1"});

  console.log("result => ", result);

  return result;
}

let find = async () => {
  const dbClientConnection = await openDBConnection();
  const db = await dbClientConnection.db("nexus");
  const con = await db.collection("logistics");

  let result = await con.find().toArray();

  // console.log("result => ", result);

  for(let i in result){
    let temp = result[i];
    console.log(temp.id);

    await con.findOneAndUpdate(
      { id: temp.id },
      // { id : "70e1c931-6c73-414b-8753-9b69fafc2035" },
      { $set: { trackingLink: "https://develop.d1nrfjk8kdnq1k.amplifyapp.com/track/?id="+temp.id } }
    );
  }

  return result;
}
let match = async () => {
  const dbClientConnection = await openDBConnection();
  const db = await dbClientConnection.db("nexus");
  const con = await db.collection("logistics");

  let result = await con.aggregate([
    { $match: { year: "2022", $or:[ {status: "completed"}, {status: "delivered"}] } }
    ]).toArray();

  console.log("result => ", result);

  return result;
}

const openDBConnection = async () => {

    const mongoUri = "mongodb+srv://xxx:xxx@cluster.mongodb.net/test";
    const dbConnection = await mongoClient.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return dbConnection;
};

const closeDBConnection = async (dbConnection) => {

    if( dbConnection != null  )
    {
        await dbConnection.close();
        dbConnection = null;
        console.log("connection closed");
    }
};

avg();