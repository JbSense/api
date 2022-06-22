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

  async create (data) {
    const email = data.email
    const password = data.password

    const verifyIfExistEmail = await Admin.findOne({ where: { email } })

    if (verifyIfExistEmail == null) {
      Admin.create({
        name: data.name,
        email,
        password,
        id_status_admin: data.id_status_admin
      })
    } else {
      return {
        error: 'Conta já existentente'
      }
    }
  }
}

export default new AdminController()
