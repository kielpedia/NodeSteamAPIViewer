var steam = require('../data/steam');
var steamId = '76561197976785222';
/*
 * GET home page.
 */

exports.list = function(req, res){
  steam.friendList(steamId, function(err, friends){
      if(err)   res.status(500);
      else{
          var ids = friends.friends.map(function (row) {
              return row.steamid;
          })
          steam.userList(ids, function(err, data){
              res.render('friends', data);
          });
      }

  })
};