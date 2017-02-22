module.exports.request = function (req, res) {
  // TODO: Implement this request handler
  const data = {
    message: 'This request handler has NOT been implemented'
  }
  res.status(200).json(data)
}
