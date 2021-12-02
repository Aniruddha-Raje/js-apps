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


const openDBConnection = async () => {

    const mongoUri = "";
    const dbConnection = await mongoClient.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("db connected => ", dbConnection);

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

test();