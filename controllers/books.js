import {Book} from '../models'

class Books {
  static index(req, res) {
    return Book
      .findAll()
      .then(data => res.status(201).send({
        status: true,
        message_code: null,
        message: null,
        data
      }))
  }
  
  static store(req, res) {
    const { title, author, description, quantity } = req.body
    return Book.create({
        title,
        author,
        description,
        quantity
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
    return Book.findByPk(id)
      .then(data => res.status(201).send({
        status: true,
        message_code: null,
        message: null,
        data
      }))
  }

  static updateBook(req, res) {
    const id = req.params.id
    const { title, author, description, quantity } = req.body
    return Book.findByPk(id)
      .catch(error => res.status(400).send({
        status: false,
        message_code: null,
        message: 'Update book error',
        error: error
      }))
  }

}

export default Books
