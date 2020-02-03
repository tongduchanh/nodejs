import model from '../models';

const { User } = model;

class Users {
  static index(req, res) {
    return User
      .findAll()
      .then(data => res.status(201).send({
        status: true,
        message_code: null,
        message: null,
        data
      }))
  }

  static store(req, res) {
    const { name, username, email, password } = req.body
    return User
      .create({
        name,
        username,
        email,
        password
      })
      .then(data => res.status(201).send({
        status: true,
        message_code: null,
        message: null,
        data
      }))
  }

  static show(req, res) {
    const id = req.params.id
    return User.findByPk(id)
      .then(data => res.status(201).send({
        status: true,
        message_code: null,
        message: null,
        data
      }))
  }

  
}

export default Users;