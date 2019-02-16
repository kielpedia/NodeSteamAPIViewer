var request = require('request');
var baseUrl = 'http://api.steampowered.com/';
var key = 'whoopsies';

var friendList = function (steamid, callback) {
    var url = baseUrl + 'ISteamUser/GetFriendList/v0001/?key=' +
        key +
        '&steamid=' + steamid + '&relationship=friend';

    request.get(url, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            var obj = JSON.parse(body);
            callback(null, obj.friendslist);
        } else {
            callback(err ? err : response.statusCode);
        }
    })

}

var userList = function (userIds, callback) {

    var url = baseUrl + 'ISteamUser/GetPlayerSummaries/v0002/?key=' +
        key + '&steamIds=';

    url += userIds.join();

    request.get(url, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            var obj = JSON.parse(body);
            callback(null, obj.response);
        } else {
            callback(err ? err : response.statusCode);
        }
    })
}

var ownedGameList = function (steamid, callback) {
    var url = baseUrl + 'IPlayerService/GetOwnedGames/v0001/?key=' +
        key +
        '&steamid=' + steamid + '&include_appinfo=1&include_played_free_games=1';

    request.get(url, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            var obj = JSON.parse(body);
            callback(null, obj.response);
        } else {
            callback(err ? err : response.statusCode);
        }
    })
}

module.exports.friendList = friendList;
module.exports.userList = userList;
module.exports.ownedGameList = ownedGameList;
