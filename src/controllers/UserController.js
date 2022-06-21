class UserController {
  setUser (data) {
    const name = data.name
    const lastName = data.last_name

    return name + ' ' + lastName
  }

  getUser () {
    return 'User X'
  }
}

export default new UserController()
