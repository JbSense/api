import Admin from '../models/Admin.js'

class AdminController {
  async login (data) {
    const email = data.email
    const password = data.password

    const admin = await Admin.findOne({ where: { email } })
    console.log(admin.password)

    if (password === admin.password) {
      return {
        message: 'Ok',
        data: {
          login: true
        }
      }
    }

    return {
      message: 'Ok',
      login: false
    }
  }

  async getAdmin (data) {
    const idAdmin = data.id_admin
    const admin = await Admin.findOne({ where: { id_admin: idAdmin } })

    if (admin !== null) {
      return {
        message: 'Ok',
        data: admin
      }
    } else {
      return { message: 'Usuário não encontrado' }
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

      return { message: 'Administrador criado com sucesso' }
    }

    return { message: 'Conta já existentente' }
  }
}

export default new AdminController()
