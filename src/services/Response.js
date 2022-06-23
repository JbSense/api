class Response {
  constructor (status, message) {
    this.status = status
    this.message = message
    this.data = null
    this.error = null
  }

  setStatus (status) {
    this.status = status
  }

  setMessage (message) {
    this.message = message
  }

  setData (data) {
    this.data = data
  }

  setError (error) {
    this.error = error
  }

  buildResponse () {
    return {
      status: this.status,
      message: this.message,
      data: this.data,
      error: this.error
    }
  }
}

export default Response
