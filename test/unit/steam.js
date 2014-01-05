var assert = require('assert'),
    request = require('request'),
    sinon = require('sinon'),
    steam = require('../../src/data/steam.js'),
    friendIdData = require('../data/friendIdList.json'),
    gameData = require('../data/gameList.json'),
    userSummaryData = require('../data/playerSummaryList.json');

describe('Steam Unit Tests', function(){
    describe('#friendList', function(){

        it('Get and Parse Friend data', function(done){
            sinon.stub(request, 'get')
                .yields(null, {"statusCode": 200}, JSON.stringify(friendIdData));
            steam.friendList("fakeid", function(err, data){
                assert.ok(!err, "Error should be undefined");
                assert.deepEqual(friendIdData.friendslist, data, "Data should be the same");
                request.get.restore();
                done();
            })
        });

        it('Handle Friend List Non-200 Status Code error', function(done){
            sinon.stub(request, 'get')
                .yields(null, {"statusCode": 500}, "<HTML>500 error</HTML>");
            steam.friendList("fakeid", function(err, data){
                assert.ok(err, "Error should be defined");
                assert.equal(data, null, "Data should be null");
                request.get.restore();
                done();
            })
        });
    })

    describe('#userList', function(){

        it('Get and Parse User data', function(done){
            sinon.stub(request, 'get')
                .yields(null, {"statusCode": 200}, JSON.stringify(userSummaryData));
            steam.userList([100,200,300], function(err, data){
                assert.ok(!err, "Error should be undefined");
                assert.deepEqual(userSummaryData.response, data, "Data should be the same");
                request.get.restore();
                done();
            })
        });

        it('Handle User Data Non-200 Status Code error', function(done){
            sinon.stub(request, 'get')
                .yields(null, {"statusCode": 500}, "<HTML>500 error</HTML>");
            steam.userList([100,200,300], function(err, data){
                assert.ok(err, "Error should be defined");
                assert.equal(data, null, "Data should be null");
                request.get.restore();
                done();
            })
        });
    })

    describe('#ownedGameList', function(){

        it('Get and Parse Game data', function(done){
            sinon.stub(request, 'get')
                .yields(null, {"statusCode": 200}, JSON.stringify(gameData));
            steam.ownedGameList("fakeId", function(err, data){
                assert.ok(!err, "Error should be undefined");
                assert.deepEqual(gameData.response, data, "Data should be the same");
                request.get.restore();
                done();
            })
        });

        it('Handle Game List Non-200 Status Code error', function(done){
            sinon.stub(request, 'get')
                .yields(null, {"statusCode": 500}, "<HTML>500 error</HTML>");
            steam.ownedGameList("fakeid", function(err, data){
                assert.ok(err, "Error should be defined");
                assert.equal(data, null, "Data should be null");
                request.get.restore();
                done();
            })
        });
    })
})

