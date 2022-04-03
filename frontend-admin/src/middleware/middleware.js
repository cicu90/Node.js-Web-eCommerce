

module.exports = (err, req, res, next) => {
  console.log("Error Handler Middleware: ");
  console.error(err);

  if (req.headersSent) {
    return next(err);
  }

  res.status(500).send({
    data: null,
    error: "Something went wrong",
  });
};
