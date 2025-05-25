
exports.handler = async (event) => {
  console.log("🚀 Lambda is alive! Event received:", JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "✅ Hello from Lambda Docker!",
      timestamp: new Date().toISOString(),
    }),
  };
};
