var assert = require('assert'),
    steam = require('../../src/data/steam.js');

var testSteamId = '76561197960435530';

describe('Steam API Integration Tests', function(){

    describe('#friendList', function(){
        it('Query Steam API for Friend Data', function(done){
            steam.friendList(testSteamId, function(err, data){
                assert.ok(!err, "We received an error");
                assert.ok(data, "We didn't receive any data");
                done();
            })
        })


    })

    describe('#userList', function(){
        it('Query Steam API for Friend Data', function(done){
            steam.userList([testSteamId], function(err, data){
                assert.ok(!err, "We received an error");
                assert.ok(data, "We didn't receive any data");
                done();
            })
        })

    })

    describe('#ownedGameList', function(){
        it('Query Steam API for Owned Games Data', function(done){
            steam.ownedGameList(testSteamId, function(err, data){
                assert.ok(!err, "We received an error");
                assert.ok(data, "We didn't receive any data");
                done();
            })
        })
    })

})
