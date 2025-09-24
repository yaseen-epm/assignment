
const { products } = require("./mockData");

exports.main = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(products)
  };
};
