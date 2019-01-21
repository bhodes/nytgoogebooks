import axios from 'axios';

export default {

  getSavedBooks: function() {
    return axios.get('/api/books');
  },
  saveBook: function(book) {
    return axios.post(`/api/books/`, book)
  },
  deleteSavedBook: function(id) {
    return axios.delete(`/api/books/${id}`)
  },
  searchGoogleBooks: function(title) {
    return axios.post('/api/google', title)
  }
};
