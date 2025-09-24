exports.main = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Welcome to the Shop API!" })
  };
};
