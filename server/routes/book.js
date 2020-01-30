import Books from '../controllers/books'
export default (app) => {
  app.get('/api/books', Books.index);

  app.post('/api/books', Books.store);

  app.get('/api/books/:id', Books.show);

  app.put('/api/books/:id', Books.updateBook)
};