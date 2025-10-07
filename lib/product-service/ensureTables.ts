const { DynamoDBClient, CreateTableCommand, DescribeTableCommand } = require("@aws-sdk/client-dynamodb");

async function ensureTableExists(client:any, tableParams:any) {
  try {
    await client.send(new DescribeTableCommand({ TableName: tableParams.TableName }));
    console.log(`Table '${tableParams.TableName}' exists.`);
  } catch (err:any) {
    if (err.name === 'ResourceNotFoundException') {
      console.log(`Table '${tableParams.TableName}' does not exist. Creating...`);
      await client.send(new CreateTableCommand(tableParams));
      console.log(`Table '${tableParams.TableName}' created.`);
    } else {
      throw err;
    }
  }
}

// Example usage
(async () => {
  const client = new DynamoDBClient({ region: "us-east-1" });

  // Products table schema
  const productsTableParams = {
    TableName: 'products',
    AttributeDefinitions: [
      { AttributeName: "id", AttributeType: "S" },
    ],
    KeySchema: [
      { AttributeName: "id", KeyType: "HASH" },
    ],
    BillingMode: "PAY_PER_REQUEST",
  };

  // Stock table schema
  const stocksTableParams = {
    TableName: 'stock',
    AttributeDefinitions: [
      { AttributeName: "product_id", AttributeType: "S" },
    ],
    KeySchema: [
      { AttributeName: "product_id", KeyType: "HASH" },
    ],
    BillingMode: "PAY_PER_REQUEST",
  };

  await ensureTableExists(client, productsTableParams);
  await ensureTableExists(client, stocksTableParams);
})();
