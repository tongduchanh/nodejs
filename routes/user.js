import Users from '../controllers/user';
import Books from '../controllers/books'
export default (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.get('/api/users', Users.index);

  app.get('/api/users/:id', Users.show);

  app.post('/api/users', Users.store);

};