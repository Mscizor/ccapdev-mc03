const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
     renders all contacts when client sends an HTTP GET request
     to '/getIndex'.
    */
    getIndex: function(req, res) {
      db.findMany(User, {}, 'name number', function(users){
        res.render('home', {
          users: users
        });
      });
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getCheckNumber`. This function checks if a
            specific number is stored in the database. If the number is
            stored in the database, it returns an object containing the
            number, otherwise, it returns an empty string.
    */
    getCheckNumber: function(req, res) {
        // your code here
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getAdd`. This function adds the contact sent
            by the client to the database, then appends the new contact to the
            list of contacts in `home.hbs`.
    */
    getAdd: function(req, res) {
      // your code here
    },

    /*
    TODO:   This function is executed when the client sends an HTTP GET
            request to path `/getDelete`. This function deletes the contact
            from the database, then removes the contact to the list of
            contacts in `home.hbs`.
    */
    getDelete: function (req, res) {
        // your code here
    }

}

module.exports = controller;
