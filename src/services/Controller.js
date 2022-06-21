/* eslint-disable no-eval */

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

  async callMethod () {
    if (this.params !== '{}') {
      return await eval(`this.controllers[this.controller].${this.method}(${this.params})`)
    } else {
      return await eval(`this.controllers[this.controller].${this.method}()`)
    }
  }
}

export default Controller
