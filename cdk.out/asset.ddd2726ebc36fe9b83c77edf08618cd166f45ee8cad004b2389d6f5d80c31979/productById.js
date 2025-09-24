
const { products } = require("./mockData");

exports.main = async (event) => {
  const id = event.pathParameters && event.pathParameters.productId;
  const product = products.find(p => p.id === id);
  if (product) {
    return {
      statusCode: 200,
      body: JSON.stringify(product)
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Product not found" })
    };
  }
};
