'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var uuid = require('node-uuid');

var LocationSchema = new Schema({
    _id: { type: String, default: function genUUID () { return uuid.v4(); }},
    name: { type: String, lowercase: true, trim:true, match: /[a-z]+/ },
    module: String,
    title: String,
    text: String,
    choices: {},
    

    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

LocationSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};


mongoose.model('Location', LocationSchema);