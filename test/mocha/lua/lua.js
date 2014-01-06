'use strict';

/**
 * Module dependencies.
 */
var should = require('should');

var path = require('path');
var luaFile = path.resolve(__dirname, 'test.lua');

var nodeLua, luaState;
//The tests
describe('<Unit Test>', function() {
    describe('Lua', function() {
        before(function(done) {
            nodeLua = require('nodelua');

            luaState = new nodeLua.LuaState('lua');

            done();
        });

        it('should load bindings without errors', function(done) {
            should.exist(nodeLua);
            done();
        });

        it('should create lua state without errors', function(done) {
            should.exist(luaState);
            done();
        });
       
        describe('Pluto', function() {
            it('should load Pluto', function(done) {
                luaState.doString('return require(\'pluto\')', function(error, ret_value){
                    should.not.exist(error);
                    should.ok(ret_value);
                    should.exist(luaState.getGlobal('pluto'));

                    done();
                });

            });


            it('should serialize and deserialize a coroutine correctly', function(done) {
                luaState.doFile(luaFile, function(error, ret_value){
                    should.not.exist(error);
                    should.ok(ret_value);
                    should(ret_value.a['5']).equal(5);
                    should(ret_value.b['1']).equal(6);
                    should(ret_value.b['5']).equal(10);
                    done();
                });
            });

        });

    });
});


            

            

