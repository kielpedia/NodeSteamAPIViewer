var steam = require('../data/steam');
var steamId = '76561197976785222';
/*
 * GET home page.
 */

exports.list = function(req, res){
  steam.ownedGameList(steamId, function(err, data){
      res.render('games', data);
  });
};