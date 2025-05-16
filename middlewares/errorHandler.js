const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    error: 'Server Error'
  });
};

module.exports = errorHandler;