class NotAuthorized extends Error {
  constructor() {
    super("Not Authorized")
  }
}

module.exports = NotAuthorized