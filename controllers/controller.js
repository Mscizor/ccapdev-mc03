const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    /*
      Renders all contacts when client sends an HTTP GET request
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
      Executed when the client sends an HTTP GET request to path `/getCheckNumber`.
      return's the request's number back if it's found in user database, empty string
      otherwise
    */
    getCheckNumber: function(req, res) {
      var number = req.query.number;

      db.findOne(User, {number: number}, 'number', function(result){
        res.send(result);
      });
    },

    /*
      Executed when the client sends an HTTP GET request to path `/getAdd`. 
      inserts the request's name and number into the user database after and
      sends back the name and number to be rendered into the list.
    */
    getAdd: function(req, res) {
      var name = req.query.name;
      var number = req.query.number;
      db.insertOne(User, {name: name, number: number}, function(result){
        if (result)
          res.send({name: name, number: number});
      });
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
