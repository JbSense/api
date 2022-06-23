/* eslint-disable no-eval */
import Response from './Response.js'

// Import controllers
import AdminController from '../controllers/AdminController.js'
import UserController from '../controllers/UserController.js'

class Controller {
  constructor (controller, method, params) {
    this.controller = controller
    this.method = method
    this.params = JSON.stringify(params)
    this.controllers = {
      UserController,
      AdminController
    }
  }

  async makeCall (call) {
    try {
      const callResponse = await eval(call)
      const response = new Response(200, callResponse.message)

      if (typeof callResponse.data !== 'undefined') response.setData(callResponse.data)

      return response.buildResponse()
    } catch (error) {
      return new Response(400, error.message).buildResponse()
    }
  }

  async callMethod () {
    if (this.params !== '{}') {
      const call = `this.controllers[this.controller].${this.method}(${this.params})`
      return this.makeCall(call)
    } else {
      const call = `this.controllers[this.controller].${this.method}()`
      return this.makeCall(call)
    }
  }
}

export default Controller
