import Admin from '../models/Admin.js'

class AdminController {
  async getAdmin (admin) {
    const email = admin.email
    const password = admin.password

    const adm = await Admin.findOne({ where: { email } })

    if (adm.password === password) {
      return adm
    } else {
      return {
        error: 'Incorrect password'
      }
    }
  }
}

export default new AdminController()
