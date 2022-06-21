class Response {
  constructor (controllerResponse) {
    this.controllerResponse = controllerResponse
  }

  badResponse () {
    return {
      status: 400,
      message: 'Bad request',
      error: this.controllerResponse
    }
  }

  sucessResponse () {
    return {
      status: 200,
      message: 'Success',
      data: this.controllerResponse
    }
  }
}

export default Response
